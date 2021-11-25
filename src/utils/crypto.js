const { createHmac } =require('crypto');



export function crypto(str){
  const secret = 'abcdefg';
  const hash = createHmac('sha256', secret)
                 .update(str)
                 .digest('hex');
return hash  
}

