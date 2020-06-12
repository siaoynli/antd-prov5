/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-12 16:42:32
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-12 16:43:43
 * @Description:
 */

import { request } from 'umi';

// 获取所有管理员
export async function query() {
  return request<API.CurrentUser[]>('/admins');
}

//获取当前管理员
export async function queryCurrent() {
  return request<API.CurrentUser>('/currentAdmin', {
    method: 'GET',
  });
}

//获取通知
export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/notices');
}
