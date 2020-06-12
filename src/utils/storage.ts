/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-12 11:12:48
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-12 11:18:21
 * @Description:
 */

export default class Storage {
  static store = window.localStorage;

  static set(key: string, value: string): void {
    this.store[key] = value;
  }

  static get(key: string): string {
    return this.store.getItem(key) || '';
  }
}
