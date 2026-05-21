<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>公司部门与人员管理系统</title>
    <style>
        /* ========== 全局样式 ========== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
            background: #f0f2f5;
            color: #333;
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* ========== 顶部工具栏容器 ========== */
        .toolbar {
            background: #fff;
            padding: 12px 20px;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }
        /* 工具栏按钮通用样式 */
        .toolbar .btn {
            padding: 8px 16px;
            border: 1px solid #d9d9d9;
            background: #fff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }
        .toolbar .btn:hover {
            border-color: #409eff;
            color: #409eff;
        }
        .toolbar .btn.primary {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
        .toolbar .btn.primary:hover {
            background: #66b1ff;
        }
        /* 工具栏内文件选择输入隐藏 */
        .toolbar input[type="file"] {
            display: none;
        }

        /* ========== 主内容区：左右两栏布局 ========== */
        .main-container {
            display: flex;
            flex: 1;
            overflow: hidden;
        }

        /* ========== 左侧部门树面板 ========== */
        .dept-panel {
            min-width: 320px;
            min-width: 260px;
            background: #fff;
            border-right: 1px solid #e0e0e0;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        /* 面板标题栏 */
        .panel-header {
            padding: 16px 20px;
            font-weight: bold;
            font-size: 16px;
            border-bottom: 1px solid #f0f0f0;
            background: #fafafa;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        /* 部门树容器，可滚动 */
        .tree-container {
            flex: 1;
            overflow-y: auto;
            padding: 12px 8px;
            user-select: none;
        }
        /* 树节点外层包裹 */
        .tree-node {
            margin-left: 0;
            list-style: none;
        }
        /* 单个树节点条目 */
        .tree-item {
            /* display: flex; */
            align-items: center;
            padding: 6px 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.15s;
            white-space: nowrap;
        }
        .tree-item:hover {
            background: #f5f7fa;
        }
        .tree-item.active {
            background: #e6f7ff;
            color: #409eff;
        }
        /* 展开/折叠图标 */
        .tree-toggle {
            width: 18px;
            height: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 4px;
            font-size: 12px;
            color: #888;
            transition: transform 0.2s;
            flex-shrink: 0;
        }
        .tree-toggle.expanded {
            transform: rotate(90deg);
        }
        .tree-toggle.no-children {
            visibility: hidden; /* 无子部门时隐藏图标 */
        }
        /* 部门名称文字 */
        .tree-label {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        /* 子部门列表缩进容器 */
        .tree-children {
            margin-left: 24px;
            display: none; /* 默认折叠 */
        }
        .tree-children.expanded {
            display: block;
        }

        /* ========== 右侧详情区 ========== */
        .detail-panel {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #fff;
            overflow-y: auto;
            padding: 24px;
        }
        /* 信息展示卡片 */
        .info-card {
            background: #fafafa;
            border: 1px solid #f0f0f0;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .info-card h3 {
            margin-bottom: 12px;
            font-size: 16px;
            border-bottom: 1px solid #eee;
            padding-bottom: 8px;
        }
        /* 键值对信息行 */
        .info-row {
            display: flex;
            margin-bottom: 8px;
            font-size: 14px;
        }
        .info-label {
            width: 90px;
            color: #888;
            flex-shrink: 0;
        }
        .info-value {
            flex: 1;
            word-break: break-all;
        }
        /* 操作按钮组 */
        .action-group {
            margin-top: 12px;
            display: flex;
            gap: 8px;
        }
        .btn-sm {
            padding: 4px 12px;
            font-size: 13px;
            border: 1px solid #d9d9d9;
            background: #fff;
            border-radius: 3px;
            cursor: pointer;
        }
        .btn-sm:hover {
            border-color: #409eff;
            color: #409eff;
        }

        /* 员工表格 */
        .staff-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
        }
        .staff-table th, .staff-table td {
            border: 1px solid #e0e0e0;
            padding: 10px 12px;
            text-align: left;
            font-size: 14px;
        }
        .staff-table th {
            background: #f5f7fa;
            font-weight: 500;
        }
        .staff-table tr:hover td {
            background: #f9f9f9;
        }

        /* 表单样式（用于弹出层或内嵌表单） */
        .form-group {
            margin-bottom: 16px;
        }
        .form-group label {
            display: block;
            margin-bottom: 6px;
            font-weight: 500;
            font-size: 14px;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            font-size: 14px;
            transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: #409eff;
        }

        /* 消息提示区 */
        .message-area {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .message-toast {
            padding: 10px 20px;
            border-radius: 4px;
            color: #fff;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            animation: slideIn 0.3s;
        }
        .message-toast.success { background: #67c23a; }
        .message-toast.error { background: #f56c6c; }
        .message-toast.info { background: #909399; }

        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        /* 遮罩层（用于模态框） */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
        }
        .modal-box {
            background: #fff;
            border-radius: 8px;
            padding: 24px;
            width: 480px;
            max-width: 90%;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .modal-box h2 {
            margin-bottom: 20px;
            font-size: 18px;
        }
        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="toolbar">
        <!-- 导入部门CSV按钮，关联隐藏的文件输入框 -->
        <button class="btn" id="btn-import-dept">📂 导入部门CSV</button>
        <input type="file" id="file-dept" accept=".csv">

        <!-- 导入人员CSV按钮 -->
        <button class="btn" id="btn-import-staff">📂 导入人员CSV</button>
        <input type="file" id="file-staff" accept=".csv">

        <!-- 导出数据按钮 -->
        <button class="btn" id="btn-export">💾 导出全部CSV</button>

        <!-- 新增员工按钮 -->
        <button class="btn-sm btn" id="btn-add-staff">➕ 新增员工</button>
        <div class="yyyyy" style="display: none; margin-top: 8px; padding: 8px; border: 1px dashed #ccc;">
            <div>工号：<input type="text" id="btn-add-staff1" placeholder="4位数字"></div>
            <div>姓名：<input type="text" id="btn-add-staff2" placeholder="请输入姓名"></div>
            <div>部门ID：<input type="text" id="btn-add-staff3" placeholder="4位部门编号"></div>
            <div>职位：<input type="text" id="btn-add-staff4" placeholder="例如：开发"></div>
            <button class="btn-sm" id="btn-add-staff-submit">添加员工</button>
        </div>

        <!-- 添加子部门按钮 -->
        <button class="btn-sm btn" id="btn-add-child" title="添加下级部门">➕子部门</button>
        <div class="kkkkk" style="display: none;">
                <div>新部门id：<input type="text" id="btn-add-dept1"></div>
                <div>新部门名：<input type="text" id="btn-add-dept2"></div>
                <div>父部门id：<input type="text" id="btn-add-dept3"></div>
                <button class="btn-sm" id="btn-add-dept">添加部门</button>
        </div>
    </div>

    <!-- 主内容区 -->
    <div class="main-container">
        
        <!-- 左侧：部门树面板 -->
        <div class="dept-panel">
            <div class="panel-header">
                <span>📁 组织架构</span>
            </div>
            <!-- 部门树渲染容器，JS会在此动态生成树节点 -->
            <div class="tree-container" id="tree-container">
                <!-- 示例树节点结构（由JS动态生成）：
                <ul class="tree-node">
                    <li class="tree-item" data-dept-id="0001">
                        <span class="tree-toggle expanded">▶</span>
                        <span class="tree-label">总公司</span>
                    </li>
                    <ul class="tree-children expanded">
                        <li class="tree-item" data-dept-id="0002">
                            <span class="tree-toggle no-children">▶</span>
                            <span class="tree-label">技术部</span>
                        </li>
                    </ul>
                </ul>
                -->
            </div>
        </div>

        <!-- 右侧：详情与操作面板 -->
        <div class="detail-panel" id="detail-panel">
            <div id="placeholder-info" style="color:#aaa; text-align:center;">
                请从左侧选择一个部门查看详情
            </div>
            <div id="dept-detail-card" class="info-card">
                <h3>部门信息</h3>
                <div class="info-row"><span class="info-label">部门编号：</span><span class="info-value" id="dept-id"></span></div>
                <div class="info-row"><span class="info-label">部门名称：</span><span class="info-value" id="dept-name"></span></div>
                <div class="info-row"><span class="info-label">上级部门：</span><span class="info-value" id="dept-parent"></span></div>
                <div class="info-row"><span class="info-label">层级深度：</span><span class="info-value" id="dept-depth"></span></div>
                <div class="info-row"><span class="info-label">完整路径：</span><span class="info-value" id="dept-path"></span></div>
                <div class="action-group">
                    <button class="btn-sm" id="btn-edit-dept">✏️ 编辑部门</button>
                    <button class="btn-sm" id="btn-del-dept" style="color:#f56c6c; border-color:#f56c6c;">🗑️ 删除部门</button>
                </div>
            </div>

            <!-- 部门下员工列表卡片 -->
            <div id="staff-list-card" class="info-card">
                <h3>部门员工</h3>
                <table class="staff-table">
                    <thead>
                        <tr>
                            <th>工号</th>
                            <th>姓名</th>
                            <th>职位</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="staff-tbody">
                        <!-- 由JS动态生成员工行 -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="js.js"></script>
    <script src="js2.js"></script>
</body>
</html>