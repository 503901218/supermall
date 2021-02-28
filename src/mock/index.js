import mock from 'mockjs'

mock.mock('/home/dataM', [
    {

        'name':'@name',
        'img':"@image('150px*200px','red','#fff','testimg')",
        'title':"@cparagraph(1)",
        'price':"22",
        "star|1-5":"⭐",
        'id':"320000200010189152"
    },
    {

        'name':'@name',
        'img':"@image('150px*200px','#992','#fff','test2img')",
        'title':"@cparagraph(1)",
        'price':"23",
        "star|1-5":"⭐",
        'id':"440000197411136732"
    },
    
    {

        'name':'@name',
        'img':"@image('150px*200px','#992','#fff','test2img')",
        'title':"@cparagraph(1)",
        'price':"23",
        "star|1-5":"⭐",
        'id':"44000019741116732"
    }
])

mock.mock('/home/dataN', [
    {

        'name':'@name',
        'img':"@image('200px*200px','pink','#000','testimg')",
        'title':"@cparagraph(1)",
        'price':"2222",
        "star|1-5":"⭐",
        'id':"@id"
    },
    {

        'name':'@name',
        'img':"@image('200px*200px','#992','#000','test2img')",
        'title':"@cparagraph(1)",
        'price':"2222",
        "star|1-5":"⭐",
        'id':"@id"
    }
])



mock.mock('/home/dataS', [
    {
        'name':'@name',
        'img':"@image('200px*200px','#798','#000','testimg')",
        'title':"@cparagraph(1)",
        'price':"22s22",
        "star|1-5":"⭐",
        'id':"@id"
    },
    {

        'name':'@name',
        'img':"@image('200px*200px','#192','#000','test2img')",
        'title':"@cparagraph(1)",
        'price':"222a2",
        "star|1-10":"⭐",
        'id':"@id"
    }
])

// mock用post方式传参 提交方式默认为get


mock.mock('/detail','get',
        [

            {
                // 商品信息
                "detailBase.logo":'@ctitle(3)',
                'id':"320000200010189152",
                'name':'@name',
                'img':"@image('200px*200px','#798','#000','testimg')",
                'title':'@cparagraph(2)',
                "newprice|1-100": 100,
                "discountprice|1":["优惠价","活动价","秒杀价"],
                "backprice|1":["全国包邮","72小时发货"],
                "backprice2|1":["7天无理由退款","运费险"],
                "oldprice|90-200":1,
                "star|1-10":"⭐",
                "city":'@city(true)',
                'sell|100-1000':1,
                'collect|100-1000':1,
                // 'count':0,

                // 店铺信息
                'logo':"@image('50px50px','#0affa8','#fff','logo')",
                'allsell|1-10.1-2':1,
                "allgoods|90-200":1,
                'point1|3-4.1-2':1, 
                'point2|3-4.1-2':1, 
                'point3|3-4.1-2':1,
                'imgs|3-5':["@image('200px100px')"],

                // 评价信息
                'logo2':"@image('50px50px','#0affa8','#fff','logo')",
                'name2':'@name',
                'Comments':'@cparagraph(2)',
                'time':'@datetime', 
                'sty|1':['白色','黑色'],
                'siz|1':['S','M','L'],
                'userimg|2-3':["@image('50px50px')"],
                

            },
            {
                "showName":'@ctitle(5)',
               'id':"440000197411136732",
               'name':'@name',
               'img':"@image('200px*200px','#798','#000','testimg')",
               'title':'@cparagraph(2)',
               "newprice|1-80": 1,
            //    'count':0,

               "discountprice|1":["优惠价","活动价","秒杀价"],
               "backprice|1":["全国包邮","72小时发货"],
               "backprice2|1":["7天无理由退款","运费险"],
               "oldprice|80-100":1,
               "star|1-10":"⭐",
               "city":'@city(true)',
               'sell|100-1000':1,
               'collect|100-1000':1,
                 // 店铺信息
                 'logo':"@image('20px*20px','#718','#670','logo')",
                 'allsell|1-10':1,
                 "allgoods|90-200":1,
                 'point1|3-5.1-10':1, 'point2|3-5.1-10':1, 'point3|3-5.1-10':1,
                 'imgs|3-5':["@image('200px100px')"],
                  // 评价信息
                'logo2':"@image('50px50px','#0affa8','#fff','logo')",
                'name2':'@name',
                'Comments':'@cparagraph(2)',
                'time':'@date', 
                'sty|1':['白色','黑色'],
                'siz|':['S','M','L'],
                
                'userimg|2-3':["@image('50px50px')"],
            }

        ]
           
//  config=>{
//      console.log(config.body)
     
//      return  [
//         {
//          // 详情页数据
//             'name':'@name',
//             'img':"@image('200px*200px','#798','#000','testimg')",
//             'title':"paragraph()",
//             'price':"22s22",
//             'id':"320000200010189152"
//         },
//         {
    
//             'name':'@name',
//             'img':"@image('200px*200px','#798','#000','test2img')",
//             'title':"paragraph()",
//             'price':"22s2",
//             'id':"440000197411136732"
//         }
        
//     ]
//  }  
)
