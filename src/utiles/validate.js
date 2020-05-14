// 验证特殊字符

export function stripscript(str) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}
// 验证数字是否是6位到20位
export function valieNumLen(value)
{
   let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  
  console.dir(!reg.test(value));
  return !reg.test(value);

}

//验证邮箱

export function valeUsr(value)
{
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  

  return !reg.test(value);


}

// let reg = /^[0-9a-zA-Z]{6}$/;
export function valiecode(value)
{
let reg = /^[0-9a-zA-Z]{6}$/;
// alert(!reg.test(value))

  return !reg.test(value);

}