var config = {
    style: 'mapbox://styles/liqingqing1234/ckiu528yh08pt19lcpo06hpeg',
    accessToken: 'pk.eyJ1IjoibGlxaW5ncWluZzEyMzQiLCJhIjoiY2tqMTgyamk1NHR2ejJ1cWpuN2ZzN3B6eSJ9.hQVxrGNHJJP76F8p7m1Qaw',
    showMarkers: false,
    theme: 'light',
    alignment：'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '1',
            title: '南京',
            image: './1.jpg',
            description: '你叫南小京，1937年的你，刚刚中央国立大学求学，然而这一年的7月7日，卢沟桥事变发生，侵华日军开始了全面侵华战争；8月13日，日军又在上海挑起战事；从1937年8月15日至12月13日，日军飞机对国民政府首都南京进行了长达3个月的“无差别”轰炸。这场轰炸后，看着昔日雄伟的大礼堂成为废墟，往日和蔼的校工在病床上痛苦的呻吟，每个人的表情越来越严肃，你第一次感受到了战争的残酷，忧愁、不安与迷茫盘踞在你的心中久久不散……',
            location: {
                center: { lon: 116.39875, lat: 39.91345 },
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit:[]
        },
        {
            id: '2',
            title: '启航',
            image: './2.jpg',
            description: '1937年9月29日，你登上前往汉口的邮轮，从南京港出发，独自踏上求学旅程。你站在甲板上，长江流水滚滚，邮轮的鸣笛声不绝。你身后的码头上人来人往，拥挤不堪，有人笑着相聚，有人哭着离别。',
            location: {
                center: { lon: 119.05823, lat: 32.20817 },
                zoom: 16.63,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3',
            alignment: 'left',
            title: '芜湖',
            image: './timg(2).jpg',
            description: '1937年10月1日，你到了芜湖，在这里你遇见了三名带着同济大学校徽的学生，询问之下得知他们和你一样是前往学校新址的，他们还告诉你，如今东部的大学都陆续地迁往内地了。你听了他们的话，忽然间懂了1935年的那句“华北之大，已经安放不得一张平静的书桌了”，时不时“路过”的敌机、人们日益紧张的表情，让你不禁怀疑“中国之大，又能安放得下一张平静的书桌吗？”。',
            location: {
                center: { lon: 118.35216, lat: 31.33484 },
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter:[ ],
            onChapterExit: [  ]
        },
        {
            id: '4',
            alignment: 'left',
            title: '黄冈',
            image: './timg.jpg',
            description: '1937年10月6日，你已经到了黄冈，清晨你下船买了一份报纸，上面报道了昨日中国德州失陷，中国守军485团全部阵亡。你握着报纸不能平息，悲伤与愤怒让你久不能言，只恨不能立刻参军，但冷静之后的无能与无力感让你疑惑求学对现在的中国有何意义。',
            location: {
                center: { lon: 114.88665, lat: 30.43342 },
                zoom: 12.45,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            title: '汉口',
            image: './248d989c3be9122962ecbdf8f64c8cd2.jpeg',
            description: '1937年10月8日，你抵达汉口，顺利地联系上了学校联络站，知晓学校将于10月10日统一安排教师生前往重庆。你在联络站不仅看到了往日相识的同学、刚刚收到录取通知书的新生，你不禁热泪盈眶，紧张一路的心终于稍微放松了些。之后你与同学在小茶馆里相聚，你们畅所欲言，谈论一路上各自的见闻，有谈及糗事的欢笑，有离家的悲伤，有对战争的愤慨。你想，这个飘零的国家里不仅有绝望，也有希望，求学亦是求个答案。.',
            location: {
                center: { lon: 114.28471, lat: 30.56670 },
                zoom: 14.84,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [   ],
            onChapterExit: [  ]
        },
        {
            id: '6',
            alignment: 'left',
            title: '重庆',
            image: './u=1517366772,4055358543&fm=26&gp=0.jpg',
            description: '1937年10月10日，你在学校的安排下，登上了前往重庆的邮轮，与上次不同的是，这次的你有同学与老师相伴。在这一趟旅程中，你看见有的老师在摇晃的轮船上依然笔耕不辍，有的同学在拥挤的船舱中依然依借着残破的烛光读书。你想，或许读书，就是为了成为鲁迅说的那种“中国的脊梁”。',
            location: {
                center: { lon: 106.72422, lat: 29.59561 },
                zoom: 10.45,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            title: '沙坪坝',
            image: './144045504884197290.jpg',
            description: '1937年12月1日，你到达重庆已经一个多月了，在这一个多月里，不断传来中国一个个城市的失陷，一支支军队的败守：11月11日，上海失陷；11月19日，苏州、嘉兴失陷；11月20日，国民政府迁来重庆；11月26日，南京开战……每一件事都让你痛心不已，但是你也看见了嘉陵江畔松坡林的中大校区仅用42天建成，此时此刻的沙坪坝上中大的校旗飘扬，全校人一个都不落，全校人员一起唱起中大校歌，这些都让你心潮澎湃。',
            location: {
                center: { lon: 106.44907, lat: 29.54824 },
                zoom: 10.45,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '8',
            alignment: 'left',
            title: '南京，南京',
            image: './u=1649923248,2305109929&fm=26&gp=0.jpg',
            description: '1937年12月18日，你在后方听说了12月13日日军攻克南京后对南京进行了惨绝人寰的大屠杀暴行，你悲痛而不能言。不仅是你，在场的所有人神情激动，但也报之以沉默，你不再是之前的冲动少年，你知道要救中国不仅仅是上战场，读书，才能救中国。',
            location: {
                center: { lon: 118.73769, lat: 32.03715 },
                zoom: 16.48,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left',
            title: '结束，亦是起点',
            image: '',
            description: '1938年11月20日，今日正上着课，屋外忽然有人大声喧哗，你没听清，但是大家忽然都跑出去了，于是你也跟着人群跑出了教室。你站在高地上，看见从校门外有人须发蓬松，赶着牛缓缓地进入校门，你恍惚之间还以为是苏武自塞北归来，然后你听见有人说那是中大的牧场职工带着中大牧场的实验动物来了，“鸡犬不留”，人群欢呼，。你站在人群之中，忽然懂了什么是“位卑未敢忘忧国”，“中国的脊梁”不会断绝，这个国家的历史必将继续书写。
                         '至此，国立中央大学西迁结束。',
            location: {
                center: { lon: 106.44907, lat: 29.54824 },
                zoom: 10.45,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [ ]
        }
]
}；
   
       
