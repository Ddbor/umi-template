// 全局前置脚本文件
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// antd全局配置
// 自定义全局默认 Spin 的元素。
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 24 }} spin />);
