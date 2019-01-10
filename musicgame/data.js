/*
{
    soure: "music/夏雨菲 - 沙漠骆驼.mp3", //文件路径
    but: [ //按钮
	    {
	        title: "听前奏识别歌曲", //按钮标题
	        start: 3, //开始时间
	        end: 24, //结束时间
	        after: "沙漠骆驼" //歌词栏显示,
	        show:true, //是否直接显示
	        ans: //答案
	    }
    ]
}
*/
var mediaData = [{
        soure: "music/夏雨菲 - 沙漠骆驼.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 3,
                end: 24,
                after: "沙漠骆驼"
            },
            {
                title: "听高潮唱出下一句",
                start: 59.5,
                end: 68,
                after: "什么鬼魅传说 什么魑魅魍魉妖魔 只有那鹭鹰在幽幽的高歌"
            },
            {
                title: "下一句",
                start: 67.5,
                end: 77,
                after: "漫天黄沙掠过 走遍每个角落 行走在无尽的苍茫星河"
            }
        ]
    },
    {
        soure: "music/朴树 - 平凡之路.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 0,
                end: 10,
                after: "朴树 - 平凡之路"
            },
            {
                title: "听高潮唱出下一句",
                start: 55,
                end: 64.5,
                after: "我曾经跨过山和大海 也穿过人山人海 我曾经拥有着的一切 "
            },
            {
                title: "下一句",
                start: 64.8,
                end: 79,
                after: "转眼都飘散如烟 我曾经失落失望失掉所有方向 直到看见平凡才是唯一的答案"
            }
        ]
    },
    {
        soure: "music/火箭少女101 - 卡路里.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 1,
                end: 17,
                after: "火箭少女101 - 卡路里"
            },
            {
                title: "听高潮唱出下一句",
                start: 68.4,
                end: 73,
                after: "拜拜 甜甜圈</br> 珍珠奶茶方便面<br/>火锅米饭大盘鸡"
            },
            {
                title: "下一句",
                start: 73.7,
                end: 75,
                after: "拿走拿走别客气"
            }
        ]
    },
    {
        soure: "music/赵雷 - 成都.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 1,
                end: 15,
                after: "赵雷 - 成都"
            },
            {
                title: "听高潮唱出下一句",
                start: 85,
                end: 98.5,
                after: "和我在成都的街头走一走 直到所有的灯都熄灭了 也不停留"
            },
            {
                title: "下一句",
                start: 99.6,
                end: 117,
                after: "你会挽着我的衣袖 我会把手揣进裤兜 走到玉林路的尽头 坐在小酒馆的门口"
            }
        ]
    },
    {
        soure: "music/儿童歌曲 - 大头儿子小头爸爸.mp3",
        but: [{
                title: "听高潮唱出下一句",
                start: 38,
                end: 45.7,
                after: "儿子的头大手儿小 爸爸的头小手儿很大"
            },
            {
                title: "下一句",
                start: 45.8,
                end: 58,
                after: "大手牵小手 走路不怕滑 走呀走呀走 走 走"
            }
        ]
    },
    {
        soure: "music/杨宗纬 张碧晨 - 凉凉.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 24,
                end: 45,
                after: "杨宗纬 张碧晨 - 凉凉.mp3"
            },
            {
                title: "听高潮唱出下一句",
                start: 90,
                end: 99,
                after: "凉凉夜色为你思念成河 化作春泥呵护着我"
            },
            {
                title: "下一句",
                start: 100,
                end: 110,
                after: "浅浅岁月拂满爱人袖 片片芳菲入水流"
            }
        ]
    },
    {
        soure: "music/屠洪刚 - 精忠报国.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 9,
                end: 28,
                after: "A:精忠报国  B:尽忠报国 ？",
                ans: "精忠报国"
            },
            {
                title: "听高潮唱出下一句",
                start: 70,
                end: 84,
                after: "马蹄南去  人北望 人北望  草青黄 尘飞扬 我愿守土复开疆"
            },
            {
                title: "下一句",
                start: 84.5,
                end: 100,
                after: "堂堂中国 要让四方 来贺"
            }
        ]
    },
    {
        soure: "music/华语群星 - 第八套广播体操.mp3",
        but: [{
                title: "听前奏识别歌曲",
                start: 5,
                end: 13,
                after: "第？套广播体操？ 5？8？",
                ans: 8
            },
            {
                title: "听高潮唱出下一句",
                start: 14,
                end: 18,
                after: "现在开始做第八套广播体操"
            },
            {
                title: "下一句",
                start: 18,
                end: 25,
                after: "原地踏步走"
            }
        ]
    },
    {
        soure: "music/昼夜 - The truth that you leave.mp3",
        but: [{
            title: "识别歌曲",
            start: 55,
            end: 99,
            after: "英文名或正文名都可以",
            show:true,
            ans: "The Truth That You Leave  你离开的事实"
        }]
    },
    {
        soure: "music/儿歌多多 - 两只老虎.mp3",
        but: [{
            title: "识别歌曲",
            start: 8,
            end: 13,
            after: "儿歌",
            show:true,
            ans: "两只老虎"
        }]
    },
    {
        soure: "music/丁于、曹芙嘉、姚贝娜、马海生 - 相亲相爱.mp3",
        but: [
            {
                title: "听高潮唱出下一句",
                start: 5,
                end: 23.5,
                after: "天下相亲与相爱 动身千里外心自成一脉 今夜万家灯火时 或许隔窗望梦中佳境在",
                show:true
            },
            {
                title: "下一句",
                start: 23.5,
                end: 43,
                after: "天下相亲与相爱 动身千里外心自成一脉 今夜万家灯火时 或许隔窗望梦中佳境在"
            }
        ]
    }

]