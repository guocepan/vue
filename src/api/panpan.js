import service from "@/utiles/request.js"  //用export default 出来的单个的就不用花括号

export function GetSms(data){
  alert(data);
  service.request({
    method: 'post',
    url: '/getSms/',
    
    data
    // data:data  左边的是服务器的参数，右边是传进来的，两个名字相同时候，可以写成一个。es6的写法
  })

}