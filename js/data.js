/* === 青岛红色人物数据集 === */
var CHARACTERS = [
  {
    id: 'dengenming',
    name: '邓恩铭',
    identity: '中共一大代表 · 青岛党组织创始人',
    birth: 1901,
    death: 1931,
    period: '建党初期',
    quote: '不惜唯我身先死，后继频频慰九泉',
    photo: 'images/characters/dengenming.jpg',

    info: {
      name: '邓恩铭',
      jiguan: '贵州荔波',
      minzu: '水族',
      shengzu: '1901 — 1931',
      shenfen: '中共一大代表',
      gongxian: '青岛党组织创始人'
    },

    timeline: [
      { year: '1901', event: '生于贵州荔波水族贫苦农家' },
      { year: '1917', event: '16岁远赴山东求学，与诸城青年王尽美结成革命挚友' },
      { year: '1921', event: '与王尽美共同出席中共一大，13位代表中唯一少数民族青年' },
      { year: '1923', event: '受党中央委派只身来到青岛，落脚海岸路18号，建立青岛第一个党组织——中共青岛组，任首任书记' },
      { year: '1925', event: '领导青岛日商纱厂两万工人总罢工，震动全国' },
      { year: '1928-1931', event: '因叛徒出卖在济南被捕入狱，狱中秘密建立党组织，两次组织越狱。1931年4月5日英勇就义，年仅30岁' }
    ],

    stories: [
      {
        title: '扎根四方机厂，点燃工运星火',
        content: '彼时四方机厂、日商纱厂数万工人被外国资本家压榨，受尽打骂克扣工资。邓恩铭脱下长衫，扮成普通学徒钻进轰鸣车间，蹲在机床边和满身油污的工人唠家常，办免费工人夜校，教工人识字算术、宣传革命道理。他巧妙地把旧式技工团体"圣诞会"改造为青岛第一个由共产党领导的革命工会，发展产业工人党员，在青岛播撒下最早的无产阶级革命火种。',
        image: 'images/stories/dengenming-gongyun.jpg'
      },
      {
        title: '领导大罢工，震动全国',
        content: '1925年，两万余名日商纱厂工人不堪日本资本家残酷压榨爆发大罢工。邓恩铭日夜奔走在沧口、四方各个厂区，串联工人、印发传单、组织纠察队，带领全城工人挺直腰杆对抗日本资本。这场罢工声势浩大，持续数月，震动全国，中共中央机关报《向导》多次报道声援。然而这也引来军阀疯狂搜捕，他被迫短暂离开青岛，但工运火种已经燎原。',
        image: 'images/stories/dengenming-bagong.jpg'
      },
      {
        title: '狱中不屈，慷慨就义',
        content: '因叛徒出卖，邓恩铭在济南被捕入狱。三年牢狱中，他没有消沉，反倒在狱中秘密建立党组织，领导难友绝食抗争改善待遇，先后两次策划越狱，成功救下多名革命同志脱险。面对敌人酷刑威逼、利诱劝降，他始终不肯吐露半点组织秘密。临刑前，他提笔写下诀别诗："卅一年华转瞬间，壮志未酬奈何天；不惜唯我身先死，后继频频慰九泉。"1931年4月5日，年仅30岁的他慷慨赴死，用一生兑现了在青岛播撒革命星火的誓言。',
        image: 'images/stories/dengenming-jiuyi.jpg'
      }
    ],

    landmarks: [
      {
        id: 'dangshiguan',
        name: '中共青岛党史纪念馆',
        address: '市北区海岸路18号',
        description: '整座馆舍就是当年邓恩铭办公、居住的秘密据点，完整复原百年前屋内陈设。展厅核心展区专门开辟邓恩铭专题陈列，展出他生前使用过的课本、珍藏红丝砚、罢工传单复刻件、书信手稿等800余件史料。院内矗立邓恩铭青铜雕像，主题雕塑"引领"以党旗、火车为元素，纪念他领导铁路工人运动的功绩。是全市党员宣誓、研学必到点位。',
        hours: '周二至周日 9:00-17:00',
        ticket: '免费参观',
        image: 'images/landmarks/dangshiguan.jpg',
        coordinates: { lng: 120.3265, lat: 36.0814 }
      },
      {
        id: 'lieshiguan',
        name: '青岛市革命烈士纪念馆',
        address: '市南区太平山南麓',
        description: '烈士事迹陈列大厅设有邓恩铭独立展区，常年循环播放专题短片《诀别》，以影像方式再现邓恩铭的革命历程与慷慨就义。纪念馆坐落于太平山南麓，环境庄严肃穆，是全市中小学红色研学固定参观点位。',
        hours: '周二至周日 9:00-16:30',
        ticket: '免费参观',
        image: 'images/landmarks/lieshiguan.jpg',
        coordinates: { lng: 120.3654, lat: 36.0664 }
      }
    ],

    media: [
      {
        title: '《回声》邓恩铭专题微电影',
        source: '青岛档案信息网 · 官方出品',
        url: 'http://www.qdda.gov.cn/qddaxxw/qddaxxw/qdlswh/wsyst/wdy/2021/11/30/40281a627d6e9c95017d6f1a52000163.html'
      },
      {
        title: '《本色》系列短视频 · 第3集：邓恩铭',
        source: '灯塔党建在线 · 省级党员教育平台',
        url: 'https://cms.dtdjzx.gov.cn/2024yxdk20250228/2886910.html'
      }
    ]
  },

  {
    id: 'liweinong',
    name: '李慰农',
    identity: '第一位血染青岛的共产党人',
    birth: 1895,
    death: 1925,
    period: '大革命时期',
    quote: '青岛的工人全是我的同党！',
    photo: 'images/characters/liweinong.jpg',
    info: { name: '李慰农', jiguan: '', minzu: '', shengzu: '1895 — 1925', shenfen: '', gongxian: '' },
    timeline: [],
    stories: [],
    landmarks: [],
    media: []
  },

  {
    id: 'zhouhaoran',
    name: '周浩然',
    identity: '即墨抗日先锋 · 左翼作家',
    birth: 1915,
    death: 1939,
    period: '抗日战争',
    quote: '火光烛天是我们的前程，白骨遍地是我们的作为',
    photo: 'images/characters/zhouhaoran.jpg',
    info: { name: '周浩然', jiguan: '', minzu: '', shengzu: '1915 — 1939', shenfen: '', gongxian: '' },
    timeline: [],
    stories: [],
    landmarks: [],
    media: []
  },

  {
    id: 'xuzhenchao',
    name: '许振超',
    identity: '"人民工匠" · 九刷世界纪录',
    birth: 1950,
    death: null,
    period: '改革开放',
    quote: '劳动者的尊严没有赠与，只有靠自信自强',
    photo: 'images/characters/xuzhenchao.jpg',
    info: { name: '许振超', jiguan: '', minzu: '', shengzu: '1950 —', shenfen: '', gongxian: '' },
    timeline: [],
    stories: [],
    landmarks: [],
    media: []
  },

  {
    id: 'zhangliangang',
    name: '张连钢',
    identity: '"时代楷模" · 智慧港口推门人',
    birth: 1960,
    death: null,
    period: '新时代',
    quote: '拼了命，我们也要建成，争的就是这口气！',
    photo: 'images/characters/zhangliangang.jpg',
    info: { name: '张连钢', jiguan: '', minzu: '', shengzu: '1960 —', shenfen: '', gongxian: '' },
    timeline: [],
    stories: [],
    landmarks: [],
    media: []
  },

  {
    id: 'gaoweiyu',
    name: '高维玉',
    identity: '全国劳模 · 乡村振兴带头人',
    birth: 1966,
    death: null,
    period: '新时代',
    quote: '个人力量有限，只有紧紧融入支部、紧跟支部引领，才能真正带动乡村蜕变',
    photo: 'images/characters/gaoweiyu.jpg',
    info: { name: '高维玉', jiguan: '', minzu: '', shengzu: '1966 —', shenfen: '', gongxian: '' },
    timeline: [],
    stories: [],
    landmarks: [],
    media: []
  }
];

/* === 数据查询辅助 === */
function getCharacter(id) {
  var found = null;
  CHARACTERS.forEach(function(c) {
    if (c.id === id) found = c;
  });
  return found;
}

function getCharactersByPeriod(period) {
  var result = [];
  CHARACTERS.forEach(function(c) {
    if (c.period === period) result.push(c);
  });
  return result;
}

function getAllLandmarks() {
  var all = [];
  CHARACTERS.forEach(function(c) {
    c.landmarks.forEach(function(l) {
      all.push({
        characterName: c.name,
        characterId: c.id,
        id: l.id,
        name: l.name,
        address: l.address,
        description: l.description,
        coordinates: l.coordinates
      });
    });
  });
  return all;
}
