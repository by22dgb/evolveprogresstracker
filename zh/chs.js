/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Evolve Progress Tracker': '进化成就追踪器',
    'GitHub': '原版追踪器地址',
    'Evolve by Demagorddon': '原版游戏地址',
    'Import Save': '导入存档',
    'Clear Data': '清除数据',
    'All': '所有',
    'Atmosphere': '星球特性',
    'Biome': '生物群系',
    'Challenge': '挑战',
    'Combat': '战斗',
    'Fanaticism': '狂热信仰',
    'Genus': '种群',
    'Perk': '特权',
    'Progression': '游戏进度',
    'Reset': '威望重置',
    'Scenario': '剧情模式',
    'Species': '种族',
    'Unification': '统一',
    'Universe': '宇宙',
    'Other': '其它',
    'All Universes': '所有宇宙',
    'Standard': '标准',
    'Antimatter': '反物质',
    'Evil': '邪恶',
    'Heavy': '高引力',
    'Micro': '微型',
    'All Ratings': '所有星级',
    '0-Challenge': '无星',
    '1-Challenge': '白星',
    '2-Challenge': '铜星',
    '3-Challenge': '银星',
    '4-Challenge': '金星',
    'Unearned': '未获得的',
    'Achievements': '成 就',
    'Feats': '壮 举',
    'Perks': '特 权',


    //描述文本：
    'Apocalypse': '启示录',
    'Wiped yourself out with nuclear weapons': '用核武清除自己。',
    'The vaults didn\'t help': '避难所也救不了你！',
    'Ascended': '飞升',
    'Ascended to a higher plane of existence': '飞升到一个更高的维度层面。',
    'You\'re your own flashlight!': '你是你自己的神！',
    'Dreaded': '畏惧',
    'Ascended without constructing any Dreadnoughts': '不建造任何无畏舰完成飞升。',
    'Did you dread the achievement?': '你是否曾经畏惧这个成就？',
    'Anarchist': '无政府主义者',
    'Initiated a nuclear holocaust with an anarchy government': '在无政府体制下发动核弹重置。',
    'Some people just want to watch the world burn': '有些人只想看着世界燃烧。',
    'Squished': '压瘪',
    'Got crushed in a micro universe': '在微型宇宙中被压碎。',
    'Watch your step': '当心脚下！',
    'Second Evolution': '二次进化',
    'Evolve the same species twice in a row and then worship your ancestors.': '连续两次进化同一种族并狂热崇拜祖先。',
    'Coincidence or ancient hubris?': '巧合还是古老的狂妄自大？',
    'Blackhole? No hole': '黑洞？没有洞！',
    'Didn\'t destroy your planet with an artificial blackhole': '建造 99 个超级对撞机。',
    //'Science 1, Fearmongers 0': '懂科学，就无需恐惧。', 在下方
    'Heir of Genghis Khan': '成吉思汗的继承人',
    'Have a warmonger penalty of 8% or more.': '拥有 8% 或更多的战争贩子惩罚。',
    'What is best in life? To see your enemies fall before you.': '生活中没有什么比看着敌人倒在你面前更好的事了。',
    'Red Tactician': '红色战术家',
    'Lose 250 soldiers in a single game': '在一轮游戏中失去250名士兵。',
    'Not one step backwards.': '绝不后退一步。',
    'Pacifist': '和平主义者',
    'Achieve unification without ever initiating an attack in your current game run.': '不发动任何战争完成统一。',
    'Make love not war.': '做爱！不要战争！',
    'Neutralized': '消灭',
    'Completely contained the Andromeda threat.': '完全压制了仙女座星云的威胁。',
    'I don\'t want neutral. I want dead.': '我不要中立，我只要尸体。',
    'Paradise': '乐土',
    'Raised your morale to 200%.': '士气提升至 200% 。',
    'Don\'t worry, be happy.': '别担心，开心点。',
    'Scrooge': '守财奴',
    'Accumulated $800 Million Dollars': '资金达到 $800M。',
    'Just don\'t swim in it.': '别在里面游泳。',
    'Madagascar Tree': '马达加斯加树',
    'Evolved nightmarish flesh-eating trees': '进化成噩梦般的食肉树。',
    'Audrey III': '奥黛丽 III',
    'Sharks with Lasers': '鲨鱼与激光',
    'Create sharks with frickin\' lasers': '制造出能发射激光的鲨鱼。',
    'Dr. Evil, I presume?': '我猜是邪恶博士吧？',
    'Godwin\'s law': '高德温法则',
    'Unlock the internet with toxic trolls': '巨魔狂热崇拜先祖蘑菇人并解锁互联网科技。',
    '9-year-olds on the internet': '互联网上的9岁小孩。',
    'Infested Terrans': '受感染的人类',
    'Infested a human with mind controlling parasites': '用精神控制寄生虫感染人类。',
    'For the hive': '为了母巢！',
    'Great Leap Backwards': '大倒退',
    'Have 100 citizens starve to death in a single game': '在一轮游戏中饿死100位市民。',
    'Was Mao your mentor?': '胡弗是你的导师吗？',
    'Space Colonist': '太空移民者',
    'Colonize another planet': '移民到另一个星球。',
    'That\'s one small step for a ...': '这是你的一小步……',
    'World Domination': '世界霸权',
    'Conquered the world through only military force': '通过军事力量征服世界。',
    'All those games of RISK finally paid off': '所有的风险游戏最终都得到了回报。',
    'Illuminati': '光明会',
    'Seized control of the world through only influential dominance': '通过影响力支配夺取了世界的控制权。',
    'To rule from the shadows': '在阴影中统治。',
    'Syndicate': '辛迪加',
    'Used only your wealth to execute a takeover of the world': '用你的财富对世界进行了恶意的接管。',
    'Caveat emptor': '概不退换，购者自慎。',
    'Cult of Personality': '个人崇拜',
    'Inspired your people with your leadership abilities': '拒绝统一，以你的领导能力激励你的市民。',
    'What is steel compared to the hand that wields it?': '与挥舞它的手相比，钢铁是什么？',
    'Double Density': '双重密度',
    'Bioseed from a dense planet in a heavy universe': '在高引力宇宙，从一颗高密度星球上对外完成播种。',
    'Spinal decompression anyone?': '有人需要脊椎减压治疗吗？',
    'Doomed': '毁灭战士',
    'Stopped an invasion from Hell': '阻止了来自地狱的入侵。',
    'Shoot it until it dies': '射击它，直到它死去！',
    'Pandemonium': '群魔乱舞',
    'Constructed a fortress to hold back the tides of Hell': '建造了一座堡垒来阻挡地狱的如潮攻势。',
    'Stay awhile and listen': '停一会，听我说。',
    'Blood War': '血战',
    'Joined an ancient never-ending war between demons': '参加了一场古老的恶魔之间永不停息的战争。',
    'Evil cannot coexist with itself': '一星不容二魔。',
    'Don\'t cross the plasmids': '不要穿越质粒',
    'Synthesize an Anti-Plasmid': '通过基因突变合成一个反质粒。',
    'Total protonic reversal, it would be bad': '质子完全逆转了，糟透了。',
    'Galactic Landfill': '星系垃圾填埋场',
    'Expanded a blackhole to 12 solar masses': '把黑洞扩大到12个太阳质量。',
    'I\'m sure this is what every galactic ruler does with their blackholes.': '我敢肯定这就是每一个星系统治者对黑洞所做的。',
    'Whitehole': '白洞',
    'Caused a blackhole to explode and trigger a new big bang': '导致黑洞爆炸并引发新的大爆炸。',
    'You wiped out the universe, I hope you\'re happy with yourself.': '你消灭了宇宙，我希望你对自己感到满意。',
    'This is Heavy': '太重了',
    'Caused a universe to collapse under its own weight': '使宇宙在自身重量的作用下崩溃。',
    'Is there something wrong with the gravity in your universe?': '你宇宙中的引力有问题吗？',
    'Canceled': '取消掉了',
    'Annihilated an antimatter universe': '毁灭一个反物质宇宙。',
    'I said DON\'T let them touch.': '我说了别！让！它们接触！',
    'Evil Extinguisher': '邪恶灭火器',
    'Destroyed an evil universe': '毁灭一个邪恶宇宙。',
    'Never you will find a more wretched universe of scum and villainy.': '再也找不到比这更悲惨的充满败类和邪恶的世界了。',
    'I was god once': '我曾是神',
    'Destroyed a micro universe': '毁灭一个微型宇宙。',
    'You were doing very well, until everyone died.': '在所有人都死了之前，你都做得很棒。',
    'Dissipated': '消散',
    'Destroyed a decaying universe': '毁灭一个衰变宇宙。',
    'It was dying anyway I guess.': '我猜放着它不管也会死的。',
    'Shaken, not stirred': '摇晃，不要搅拌',
    'Caused the Cataclysm': '制造一场大灾变',
    'They should put warning labels on these supercolliders.': '他们应该给这些超级对撞机贴上警告标志。',
    'Iron Will': '钢铁意志',
    'Survived the Cataclysm': '在大灾变中幸存',
    'Nothing will stop you.': '没有什么能阻止你',
    'Failed History': '失败的轮回',
    'Restarted the Cataclysm': '再次引发大灾变',
    'Those who cannot remember the past are condemned to repeat it.': '不铭记历史的人总是犯下同样的错误',
    'Blacken the Sun': '遮蔽太阳',
    'Fully Upgraded a Dyson Sphere': '使用奥利哈刚对戴森球进行完美升级',
    'All your light are belong to us.': '你的光热全部归我了。',
    'Technophobe': '技术恐惧症',
    'Ascended with malfunctioning technology': '在电子技术经常暴走的条件下坚持飞升。',
    'Energy hated you, now you are energy. Irony much?': '能量憎恨你，而你自己成为了能量，有趣吗？',
    'Seeder': '播种者',
    'Bioseed an alien world': '对一个外星世界完成播种。',
    'What is god if not us?': '如果我们不是上帝，谁是？',
    'Macro Universe': '宏观宇宙',
    //'Bioseeded a with a macro sized race (small race inside micro universe)': '在微型宇宙里，用微型种族完成播种。', 在下方
    'Never go subatomic': '小宇宙也是很大的。',
    'Arquillian Galaxy': '阿奎尔星系',
    'Bioseeded in a micro universe': '在一个微型宇宙完成播种。',
    'How do you know you don\'t just exist inside a bigger marble?': '你怎么知道你不是生活在一个更大的玻璃球里？',
    'Verrazzano': '韦拉扎诺',
    'Successfully explored 6 unique biomes and took a civilization to the stars': '在至少6个不同生物群系的星球上完成播种。',
    'Congratulations on not being eaten by cannibals along the way.': '恭喜你没在半路上被食人族吃掉。',
    'Grassland Civilizer': '建立草原文明',
    'Successfully built a civilization on a grassland planet': '在一颗草原星球上建立文明。',
    'A garden world of your own design': '你自己设计的花园世界。',
    'Oceanic Civilizer': '建立海洋文明',
    'Successfully built a civilization on an oceanic planet': '在一颗海洋星球上建立文明。',
    'A blue gem floating in the cosmos': '漂浮在宇宙中的蓝色宝石。',
    'Forest Civilizer': '建立森林文明',
    'Successfully built a civilization on a forest planet': '在一颗森林星球上建立文明。',
    'A forest paradise for those of your choosing': '森林乐土是你的选择之一。',
    'Desert Civilizer': '建立沙漠文明',
    'Successfully built a civilization on a desert planet': '在一颗沙漠星球上建立文明。',
    'Tamed the unforgiving desert and made it your own': '驯服了无情的沙漠，现在它是你的形状了。',
    'Volcanic Civilizer': '建立火山文明',
    'Successfully built a civilization on a volcanic planet': '在一颗火山星球上建立文明。',
    'Master of the primordial world': '原始世界的主人。',
    'Tundra Civilizer': '建立苔原文明',
    'Successfully built a civilization on a tundra planet': '在一颗苔原星球上建立文明。',
    'The cold never bothered you anyway': '不管怎样，寒冷从不会困扰你。',
    'From Hell': '地狱来客',
    'Successfully built a civilization on a Hellscape planet': '在一颗地狱星球上建立文明。',
    'We\'re not in London anymore': '我们再也不用呆在伦敦了！',
    'Paradise Lost': '失乐园',
    'Successfully built a civilization on an Eden planet': '在一颗伊甸星球上建立文明。',
    'It has surprisingly few gardens': '令人惊讶的是，这里几乎没有花园。',
    'Superfund': '巨额基金',
    'Successfully built a civilization on a toxic planet': '在一颗毒气星球上建立文明。',
    'The EPA gave up on this one': '在这颗星球上谈环保是没有意义的。',
    'Dank': '潮湿',
    'Successfully built a civilization on a mellow planet': '在一颗温和星球上建立文明。',
    'Most air really is just uniformly allocated nitrogen atoms': '氮原子是空气的主要组成部分。',
    'Hoplite': '希腊重装步兵',
    'Successfully built a civilization on a rage planet': '在一颗愤怒星球上建立文明。',
    'This is SPARTA!': '这就是斯巴达！',
    'Long Winded': '废话连篇',
    'Successfully built a civilization on a stormy planet': '在一颗风暴星球上建立文明。',
    'just stop talking already': '早该闭嘴了！',
    'Depletion': '空洞',
    'Successfully built a civilization on an ozoneless planet': '在一颗缺乏臭氧的星球上建立文明。',
    'SPF 1,000,000 Required': '防晒指数一百万！',
    'Magnetar': '万磁王',
    'Successfully built a civilization on a magnetic planet': '在一颗磁性星球上建立文明。',
    'Did you expect a guy in a red helmet?': '你在期待一个戴红头盔的人吗？',
    'Rufus': '鲁福斯',
    'Successfully built a civilization on a trashed planet': '在一颗垃圾星球上建立文明。',
    'Never made it to Elysium': '从未去过极乐净土。',
    'Summer Child': '夏季之子',
    'Successfully built a civilization on an elliptical planet': '在一颗椭圆星球上建立文明。',
    'Winter is coming': '凛冬将至。',
    'Toasted': '烤焦了',
    'Successfully built a civilization on a planet that frequently is hit by intense solar flares': '在一颗耀斑灾害频发的星球上建立文明。',
    'Zero stars, would not recommend': '零星级，不推荐。',
    'Thick Skulled': '迟钝',
    'Successfully built a civilization on a dense planet': '在一颗高密度星球上建立文明。',
    'Skulls not included': '不包括头骨。',
    'Shake, Shake, Shake': '摇啊摇',
    'Successfully built a civilization on an unstable planet': '在一颗地震星球上建立文明。',
    'Shake your booty': '抖一抖屁股。',
    'Creator': '造物主',
    'Led 9 unique genera to create a lasting legacy': '引领 9 个不同的种族创造持久的传承。',
    'Gone but not forgotten, your legacy will live on': '即使逝去，也不会被遗忘，你的传承将永世流传。',
    'Heavyweight Champ': '重量级',
    'Led 8 unique genera to bioseed a world in heavy gravity': '在高重力宇宙中，引领8个不同的种族完成播种。',
    'Nothing could keep you down for the count': '没什么能阻止你数数。',
    'Motherlode': '矿工之梦',
    'Bioseeded off of a planet with four rich geological traits': '在一个有至少4项丰富矿产的星球上完成播种。',
    'Make a claim to your fortune!': '这是一颗尚未雕琢的原石。',
    'Humanoid Victus': '类人生命',
    'Led a humanoid civilization to greatness': '引领一个类人文明走向伟大。',
    'Seized your place among the stars': '我们的征途是星辰大海。',
    'Scent of a Star': '闻星识迹',
    'Led an animal civilization to greatness': '引领一个野兽文明走向伟大。',
    'Tracked a star and left your mark': '追踪一颗星星并留下你的气味。',
    'Tiny Supremacy': '微小的霸权',
    'Led a small civilization to greatness': '引领一个矮人文明走向伟大。',
    'You proved that size doesn\'t matter': '你证明了尺寸不重要。',
    'It\'s Always Bigger': '总是大一号',
    'Led a giant civilization to greatness': '引领一个巨人文明走向伟大。',
    'You proved that size does matter': '你证明了尺寸确实重要。',
    'Flew to the Sun': '飞向太阳',
    'Led a reptilian civilization to greatness': '引领一个爬行动物文明走向伟大。',
    'Never left out in the cold again': '再也不会被冷落。',
    'Soaring Above': '翱翔天际',
    'Led an avian civilization to greatness': '引领一个翼类文明走向伟大。',
    'Even flightless birds can fly': '连不会飞的鸟也上天了。',
    'Superior Numbers': '无限繁殖',
    'Led an insectoid civilization to greatness': '引领一个昆虫文明走向伟大。',
    'It\'s a numbers game': '这只是个数字游戏。',
    'Growing Unchecked': '无限生长',
    'Led a plant civilization to greatness': '引领一个植物文明走向伟大。',
    'Outgrew your soil': '在土壤中傲然挺立。',
    'Spores in the Wind': '风中的孢子',
    'Led a fungi civilization to greatness': '引领一个菌类文明走向伟大。',
    'Spread everywhere, even the stars': '到处传播，星辰也不放过！',
    'Celestial Aquarium': '天堂水族馆',
    'Led an aquatic civilization to greatness': '引领一个海洋文明走向伟大。',
    'Swimming with the stars': '遨游星海。',
    'This ain\'t Disney': '这不是迪斯尼！',
    'Led a fey civilization to greatness': '引领一个精怪文明走向伟大。',
    'A true fairytale ending': '真是一个童话般的结局。',
    'Blistering Heat': '酷热',
    'Led a heat civilization to greatness': '引领一个烈焰文明走向伟大。',
    'I guess you could stay in the kitchen': '我想你最好呆在厨房里。',
    'Polar Vortex': '极地涡流',
    'Led a polar civilization to greatness': '引领一个极地文明走向伟大。',
    'There wasn\'t even a talking snowman': '连个会说话的雪人都没有。',
    'Sandstorm Survivor': '沙暴幸存者',
    'Led a sand civilization to greatness': '引领一个沙漠文明走向伟大。',
    'The desert swallows everything... except you': '沙漠会吞噬一切……除了你。',
    'Burning Crusade': '燃烧的远征',
    'Led a demonic civilization to greatness': '引领一个恶魔文明走向伟大。',
    'Thousands of worlds will burn': '无数个世界都将陷入火海。',
    'Light in the Dark': '黑暗中的光明',
    'Led an angelic civilization to greatness': '引领一个天堂文明走向伟大。',
    'You\'re a paragon of hope in a twisted universe': '你是这个扭曲宇宙中希望的典范。',
    'Mass Extinction': '大灭绝',
    'Led 25 unique civilizations to destruction': '毁灭25个不同文明。',
    'Cosmic rays have got nothing on you': '宇宙射线对你毫无影响。',
    'Vigilante': '治安官',
    'Led 12 unique evil civilizations to destruction': '在邪恶宇宙中毁灭12个不同的文明。',
    'Flaming skull optional': '燃烧的头骨。',
    'Homo Adeadus': '死去的我们',
    'Led a Human civilization to destruction': '毁灭人类文明。',
    'Homo Erectus? More like Homo Flaccidum': '直立人？更像软弱人。',
    'The few, the proud, the dead': '又稀少，又高傲，还作死……',
    'Led an Elven civilization to destruction': '毁灭精灵文明。',
    'Now they can help the trees as fertilizer': '现在他们可以作为这些树的肥料。',
    'Outlander': '外域难民',
    'Led an Orc civilization to destruction': '毁灭兽人文明。',
    'Went out in a blaze of glory': '在荣耀的火焰中倒下。',
    'Saber Tooth Tiger': '剑齿虎',
    'Led a Cath civilization to destruction': '毁灭猫人文明。',
    'Scratched their last post': '抓破了他们的最后一根柱子。',
    'Dire Wolf': '悲惨的狼',
    'Led a Wolven civilization to destruction': '毁灭狼人文明。',
    'The moon will be lonely': '月亮变得孤独。',
    'Ferghana': '拔汗那国',
    'Led a Centaur civilization to destruction': '毁灭半人马文明。',
    'Just dust in the wind': '在风中化为尘埃。',
    'Took their candle': '蜡烛被抢走了',
    'Led a Kobold civilization to destruction': '毁灭狗头人文明。',
    'It didn\'t smell very good': '闻起来味道不太好。',
    'Greed before Need': '贪得无厌',
    'Led a Goblin civilization to destruction': '毁灭哥布林文明。',
    'Too cheap for tombstones': '这墓碑太便宜了。',
    'Unathletic': '鄙人不善奔跑',
    'Led a Gnome civilization to destruction': '毁灭侏儒文明。',
    'Couldn\'t outrun the bombs': '跑得没炸弹快。',
    'Too stupid to live': '笨死的',
    'Led an Ogre civilization to destruction': '毁灭食人魔文明。',
    'Darwin would be proud': '达尔文表示点赞。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',



    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Science 1, Fearmongers 0": "懂科学，就无需恐惧。",
    "Bioseeded a with a macro sized race (small race inside micro universe)": "在微型宇宙里，用微型种族完成播种。",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(\s*)For Evolve version$/, '$1适用于进化游戏版本'],
]);