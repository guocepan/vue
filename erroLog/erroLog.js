1、当没有this时候，报的错误
data(){
        return{
            menuTab:[
                {content:"登陆", active:true  ,showIt:1},
                {content:"注册", active:false ,showIt:1},
            ]

        }
    },
    methods:{
        changeCurrent(e){ 
            
            for(let i = 0; i < menuTab.length;i++)  ／／这个地方少了ｔｈｉｓ
            {
               menuTab[i].active = false;
            };
             e.active = true;   
            
        },
		
	错误提示：
	vue.js?ba4c:1897 ReferenceError: menuTab is not defined。
	说是没有定义。所以应该改成
	
	  methods:{
        changeCurrent(e){ 
            
           for(let i = 0; i < this.menuTab.length;i++)
            {
               this.menuTab[i].active = false;
            }