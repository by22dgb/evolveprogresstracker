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
    'creep': '蠕变',
    'store': '存储',
    'enhance': '强化',
    'evolve': '进化',
    'synthesis': '合成',
    'plasma': '质粒',
    'mutation': '突变',
    'birth': '出生',
    'crafty': '灵巧',
    'queue': '队列',
    'challenge': '挑战',
    'trader': '贸易',
    'ancients': '先祖',
    'transcendence': '超越',
    'bleed': '引流',
    'of': '个已获得，共',
    'Total Achievement Levels': '个成就',


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
    'Blind Ambition': '盲目的野心',
    'Led a Cyclops civilization to destruction': '毁灭独眼巨人文明。',
    'Lost an eye and didn\'t have a spare': '失去了一只眼睛，也没有备用的。',
    'Bad Juju': '咒符坏了',
    'Led a Troll civilization to destruction': '毁灭巨魔文明。',
    'Paid the final toll': '这是最后一笔过桥费了。',
    'Circle of Life': '生命周期',
    'Led a Tortoisan civilization to destruction': '毁灭乌龟文明。',
    'A turtle didn\'t make it to the water': '乌龟找不到水。',
    'No Savings': '没有储蓄',
    'Led a Gecko civilization to destruction': '毁灭壁虎人文明。',
    'The rates weren\'t that good after all': '毕竟利率不是那么好。',
    'Final Shedding': '最后一次蜕皮',
    'Led a Slitheryn civilization to destruction': '毁灭娜迦文明。',
    'Choked on the apple': '被苹果噎死了。',
    'Way of the Dodo': '渡渡鸟之路',
    'Led an Arraak civilization to destruction': '毁灭陆行鸟文明。',
    'Tastes like chicken': '鸡肉味，嘎嘣脆。',
    'Chicxulub': '克苏鲁伯陨石坑',
    'Led a Pterodacti civilization to destruction': '毁灭翼手龙文明。',
    'Just couldn\'t adapt': '只是适应不了。',
    'Desolate Smaug': '凄凉的史矛革',
    'Led a Dracnid civilization to destruction': '毁灭天龙文明。',
    'The forever lonely mountain': '永远的孤山。',
    'Saruman\'s Revenge': '萨鲁曼的复仇！',
    'Deforested an Entish civilization': '毁灭树人文明。',
    'Ripped them all down': '把他们都撕了！',
    'Desert Deserted': '沙漠荒芜了',
    'Led a Cacti civilization to destruction': '毁灭仙人掌文明。',
    'The oasis was a mirage': '绿洲终究是海市蜃楼。',
    'Weed Whacker': '除草机',
    'Led a Pinguicula civilization to destruction': '毁灭捕虫堇文明。',
    'Uprooted from history': '从历史的长河中连根拔起',
    'Fungicide': '杀真菌剂',
    'Led a Sporgar civilization to destruction': '毁灭孢子虫文明。',
    'The oil of the future': '未来的石油。',
    'Bad Trip': '糟糕的旅行',
    'Led a Shroomi civilization to destruction': '毁灭蘑菇人文明。',
    'Shouldn\'t have eaten that': '不应该吃那个的。',
    'Digested': '消化',
    'Led a Moldling civilization to destruction': '毁灭霉菌人文明。',
    'Feed on your own kind': '成为同族的饲料',
    'Praying Unanswered': '没有回应的祈祷',
    'Led a Mantis civilization to destruction': '毁灭螳螂人文明。',
    'Maybe next time they\'ll be listening': '也许下次他们会听到。',
    'Pulmonoscorpius': '史前巨蝎',
    'Led a Scorpid civilization to destruction': '毁灭蝎子文明。',
    'Owl supremacy': '猫头鹰万岁！',
    'Ophiocordyceps Unilateralis': '偏侧蛇虫草菌',
    'Led an Antid civilization to destruction': '毁灭蚂蚁人文明。',
    'Walked off into history': '成为历史。',
    'Megalodon': '巨齿鲨',
    'Led a Sharkin civilization to destruction': '毁灭鲨鱼人文明。',
    'It\'s shark fin soup for you': '这是您点的鱼翅汤。',
    'Calamari': '炸鱿鱼圈',
    'Led an Octigoran civilization to destruction': '毁灭八爪鱼文明。',
    'Battered and fried': '肢解然后油炸。',
    'Ashes to Ashes': '尘归尘',
    'Led a Dryad civilization to destruction': '毁灭树妖文明。',
    'You were being invaded': '你被侵略了。',
    'Stopped the music': '音乐停止了',
    'Led a Satyr civilization to destruction': '毁灭萨提尔文明。',
    'Silence is golden': '沉默是金。',
    'Snuffed': '熄灭',
    'Led a Phoenix civilization to destruction': '毁灭不死鸟文明。',
    'Couldn\'t rise from this one': '凉透了！',
    'Cooled Off': '冷却完毕',
    'Led a Salamander civilization to destruction': '毁灭火蜥蜴文明。',
    'Your fire has finally died': '你的火终将熄灭。',
    'Captured': '捕获',
    'Led a Yeti civilization to destruction': '毁灭雪怪文明。',
    'Finally caught on camera': '最终还是被拍到了。',
    'Soulless Abomination': '没有灵魂吃的憎恶',
    'Led a Wendigo civilization to destruction': '毁灭温迪戈文明。',
    'There was nothing left to feed on': '灵魂吃完了。',
    'Startled': '吓一跳',
    'Led a Tuskin civilization to destruction': '毁灭獠牙人文明。',
    'It was just too much to bear': '实在是受不了了。',
    'No Oasis': '找不到绿洲',
    'Led a Kamel civilization to destruction': '毁灭骆驼文明。',
    'The water reserves ran dry': '水喝完了。',
    'Self-immolation': '自焚',
    'Led a Balorg civilization to destruction': '毁灭炎魔文明。',
    'Burned just like that dragon': '像那条龙一样烧毁。',
    'Deal with the devil': '与恶魔交易',
    'Led an Imp civilization to destruction': '毁灭小恶魔文明。',
    'Served your final master': '为你最后的主人服务。',
    'Fallen Angel': '天使陨落',
    'Led a Seraph civilization to destruction': '毁灭大天使文明。',
    'It\'s not the fall that kills you, it\'s the thermonuclear warheads.': '你并未堕落，而是被热核弹头终结了。',
    'Unicorn Burgers': '独角兽汉堡',
    'Led a Unicorn civilization to destruction': '毁灭独角兽文明。',
    'Taste the rainbow': '尝尝彩虹！',
    'Euthanasia': '安乐死',
    'Put the Valdi out of their misery': '把瓦尔迪从痛苦中解救出来。',
    'Darwin would approve': '达尔文会同意的！',
    'Lab Failure': '实验室故障',
    'Lost a custom designed race': '毁灭一个自定义文明。',
    'We\'ll fix it in the next version': '下个版本一定会修复的！下次一定！',
    'Joyless': '无趣',
    'Colonized another world without joy': '从无趣的世界移民到另一个星球。',
    'There\'s no joy in this world': '世上没有欢乐。',
    'What a Steel': '真是个笨蛋！',
    'Managed to Bioseed without ever figuring out how to make Steel': '在没有学会钢冶炼的情况下完成播种。',
    'Seriously, what is it?': '说真的，这是什么？',
    'Take no advice': '不听劝阻',
    'Ignored the warnings and played a non-demonic race on Hellscape until MAD': '在地狱星球使用非恶魔种群核弹重置。',
    'Warnings are for sissies': '警告是给娘炮看的！纯爷们从不看警告！',
    'Ill Advised': '不理智行为',
    'Bioseeded from a Hellscape planet while playing a non-demonic race': '在地狱星球上使用一个非恶魔种群进行生物播种。',
    'Don\'t tell me what to do': '不要命令我应该怎么做。',
    'Organ Harvester': '器官收割者',
    'Took the genetic rejects to space and spread their misery to another planet': '把基因灾难带到太空，并把他们的痛苦传播到另一个星球上。',
    'You created that new race just to steal their faces, didn\'t you?': '你创造一个新的种族只是为了偷走他们的脸，不是吗？',
    'The Misery': '苦难',
    'Used the genetic rejects to initiate a late game reset option': '坚持使用基因灾难直到黑洞重置或飞升。',
    'You know you only had to MAD, right?': '你肯定有无数次抓狂到干脆扔个核弹重置掉是吧？',
    'Energizer': '劲量',
    'Ascended without building any thermal collectors.': '不建造任何集热器完成飞升。',
    'It just keeps going and going and going...': '他只是在继续运行……运行……运行……',
    'Garbage Pie': '垃圾馅饼',
    'Ascended the genetic rejects without modifying them': '不对特质作任何改良，让这些基因灾难飞升。',
    'Hold nothing, extra onions.': '一地鸡毛，一无所获。',
    'Crossed the Finish Line': 'Crossed the Finish Line（待翻译）',
    'Ascended during a Cataclysm': 'Ascended during a Cataclysm（待翻译）',
    'Slow but steady wins the race.': 'Slow but steady wins the race.（待翻译）',
    'Blank Slate': '一张白纸',
    'Removed all your major and genus racial traits': '移除你的主修特质和种群特质。',
    'A race is a race, but a blank slate could be anything; it could even be a boat!': '种族就是种族，但一张白纸有无限的可能，甚至可以是一艘船！',
    'Supermassive': '超大质量',
    'Increase a blackhole to 100 solar masses': '使一个黑洞的质量增长到太阳的100倍。',
    'More like regular massive really': '更像一个普通的大块头。',
    'Duke Steelem': '钢铁公爵',
    'Blew up a universe without ever understanding how to smelt steel': '在没有学会钢冶炼的情况下摧毁一个宇宙。',
    'Had balls of steel': '不作死就不会死。',
    'Rocky Road': '崎岖之路',
    'Bioseeded off of a planet with three poor geological traits': '在三个负面地质特性的星球建造飞船完成播种。',
    'Ice cream not included': '不含冰淇淋！',
    'Utopia': '乌托邦',
    //'Raised your morale to 500%': '士气提升至 500% 。', 在下方
    'Don\'t wake from the illusion.': '不要唤醒梦中人。',
    'Demon Slayer': '恶魔屠戮者',
    'Killed 666 million demons': '杀死6亿6600万头恶魔。',
    'They are Legion': '他们是燃烧军团。',
    'Trail Novice': '新手的足迹',
    'You have died of dysentery': '你死于痢疾',
    'Gene Journeyman': '基因熟练工',
    'You have forded a river! You lost 2 oxen.': '你涉水过河，丢了两头牛。',
    'Adept': '专家',
    'You have exhausted the game in this area': '你已经把这一带的游戏玩完了。',
    'Master of Evolve': '进化掌控者',
    'Rafted down the Columbia river': '沿哥伦比亚河顺流而下。',
    'Grandmaster of Destiny': '命运大师',
    'Congratulations! You have made it': '恭喜你！做到了！',
    'Nephilim': '奈非天',
    'Destroyed an Evil Universe using a Celestial race': '使用天堂种族毁灭一个邪恶宇宙。',
    'There is no cow level': '没有奶牛关！',
    'Crystal Lake': '水晶湖',
    'A citizen drowned on Friday the 13th.': '在黑色星期五维持文明的运转。',
    'You should abandon that lake...': '你应该放弃那个湖……',
    'Love of Idle': '怠惰的情人节',
    'Loved idling with your civilization on Valentine\'s Day': '在情人节陪你的文明逛街。',
    'They didn\'t even send flowers': '连花都没送！',
    'Unlucky': '不幸',
    'Idled while a leprechaun stole your gold': '无所事事的时候，被一个小妖精偷走了黄金。',
    'It\'s a good thing gold is not a resource': '幸好黄金不是资源。',
    'Hopper': '跳跳兔',
    'Idled around while a bunny hopped all around you.': '一只兔子绕着无所事事的你蹦蹦跳跳。',
    'Did you find all the candy?': '找到所有糖果了吗？',
    'Egg Hunt': '彩蛋追猎者',
    'Found all 12 hidden eggs during the Easter event.': '在复活节活动期间找齐 12 个隐藏彩蛋。',
    'I hope you found them before they started to smell': '希望你在蛋臭掉之前找到他们。',
    'Trick or Treat!': '不给糖果就捣蛋！',
    'Idled a civilization during Halloween': '在万圣节维持文明的运转。',
    'Boo!': '血溅万圣劫',
    'Gobble Gobble': '狼吞虎咽',
    'Idled a civilization during Thanksgiving week': '在感恩节期间维持文明的运转。',
    'Time for a food coma': '是时候来一次餐后困倦了……',
    'Ho! Ho! Ho!': '吼！吼！吼！',
    'Idled a civilization during Christmas': '在圣诞节维持文明的运转。',
    'Help! I\'m stuck in a chimney!': '救命！我被卡在烟囱里了！',
    'The Fool': '愚蠢的土拨鼠！',
    'Nothing to see here': '这里什么都没有。',
    'Freaked out about your achievements': '你的成就令人折服！',
    'April Fools!': '愚人节快乐！',
    'Genetic Memory': '遗传记忆',
    'Reduces cost creep by': '成本蠕变降低',
    'Animus': '敌意',
    'Divine Remembrance': '神圣的回忆',
    'Divine Proportion': '神圣比例',
    'Genetic Repository': '基因库',
    'Spatial Reasoning': '空间推理',
    'Plasmids boost storage space': '质粒增加了存储空间',
    'Spatial Superiority': '空间优势',
    'Plasmid storage effect +': '质粒储存效果 +',
    'Spatial Supremacy': '空间霸权',
    'Dimensional Warping': '尺寸翘曲',
    'Both Phage and Plasmids apply the Spatial Reasoning bonus': '噬菌体和质粒都应用了空间推理的优势',
    'Enhanced Muscle Fiber': 'Enhanced Muscle Fiber（待翻译）',
    'Doubles manual gathering rate': 'Doubles manual gathering rate（待翻译）',
    'Morphogenesis': '形态发生',
    'Decreases evolution costs': '降低进化成本',
    'Recombination': '重组',
    'Gain a minor trait when evolving': '进化完成后，随机选取一个次要特质，升 1 级。',
    'Homologous Recombination': '同源重组',
    'Gain 2 ranks of a second minor trait when evolving': '进化完成后，随机选取一个次要特质，升 2 级。',
    'Genetic Reshuffling': '基因改组',
    'Gain 3 ranks of a third minor trait when evolving': '进化完成后，随机选取一个次要特质，升 3 级。',
    'Recombinant DNA': 'DNA重组',
    'Gain 4 ranks of a fourth minor trait when evolving': '进化完成后，随机选取一个次要特质，升 4 级。',
    'Chimeric DNA': 'DNA嵌合',
    'Gain 5 ranks of a fifth minor trait when evolving': '进化完成后，随机选取一个次要特质，升 5 级。',
    'Molecular Cloning': '分子克隆',
    'Gain 6 ranks of a sixth minor trait when evolving': '进化完成后，随机选取一个次要特质，升 6 级。',
    'Transgenes': '转基因',
    'Gain 7 ranks of a seventh minor trait when evolving': '进化完成后，随机选取一个次要特质，升 7 级。',
    'Synthesis': '合成',
    'Karyokinesis': '核分裂',
    'Cytokinesis': '胞质分裂',
    'Mitosis': '有丝分裂',
    'Metaphase': '分裂中期',
    'Mutation': '突变',
    'Gain the ability to spend Plasmids remove major racial traits': '解锁使用质粒去除种族主修特质的能力',
    'Transformation': '转换',
    'Gain the ability to spend Plasmids to remove genus racial traits': '解锁使用质粒去除种群特质的能力',
    'Metamorphosis': '变身',
    'Gain the ability to spend Plasmids to gain major racial traits from other species of the same genus': '解锁使用质粒获得同种群其他种族主修特质的能力',
    'Replication': '复制',
    'Increases Birth Rate': '增加出生率',
    'Artificer': '技工',
    'Doubles the rate at which craftsmen work.': '工匠速度 +100% （原料消耗同样翻倍）',
    'Detail Oriented': '注重细节',
    'Rigorous': '严格',
    'Geographer': '地理学家',
    'Start new games with the build and research queue unlocked': '解锁建筑队列和科研队列的情况下开始新游戏',
    'Architect': '建筑师',
    'Double the maximum number of construction and research projects that can be queued': '建筑队列和科研队列的最大数量 +100%',
    'Hardened Genes': '基因硬化',
    'Unlocks challenge traits': '解锁基因挑战',
    'Unlocked': '基因解锁',
    'Achievements grant a small production bonus': '成就给予小额产量加成，每成就基础值 0.25%，每基因挑战 +0.25%，最高的金星成就基础值 1.25% 。',
    'Universal': '宇宙共同体',
    'Universe specific mastery is increased in value': '成就在所有宇宙的精通奖励由基础值的 40% 提升到 60% 。',
    'Standard': '宇宙准则',
    '80% of standard mastery works in alternate universes': '成就在所有宇宙的精通奖励由基础值的 60% 提升到 80%，在当前宇宙由 60% 降低到 40% 。',
    'Mastered': '精通掌控',
    'Unlocks the mastery gene': '解锁 [精通] 特质，精通奖励 +1%',
    'Negotiator': '谈判专家',
    'Mastery increases volume of goods gained from trade routes': '贸易路线中，进口货物数量受精通奖励 100% 的加成',
    'Ancients': '先祖',
    'Unlocks second tier religion upgrades': '解锁二级宗教升级',
    'Faith': '信仰',
    'Unlocks the priest job': '解锁新职业：牧师',
    'Devotion': 'Devotion（待翻译）',
    'Priests are more effective': 'Priests are more effective（待翻译）',
    'Acolyte': '助手',
    'Ziggurats increase the priest cap': '通灵塔可以提升牧师人数上限',
    'Conviction': '信念',
    'Priests are even more effective': '牧师效率增加',
    'Transcendence': '超越',
    'You can unlock both Fanaticism and Anthropology': '狂热信仰与人类学允许共存',
    'Bleeding Effect': '引流措施',
    'Synchronicity': '同步原则',
    'Astral Awareness': '星体认知',
    'Plasmids boost storage at a reduced rate in antimatter universe, and vice versa': '在反物质宇宙，质粒的仓储上限加成为其他宇宙的 20%，其他宇宙，反质粒的仓储上限加成为反物质宇宙的 10%',
    'Most storage is increased by 5% / 10% / 15% / 20% /': '大多数物资的存储上限增加 5% / 10% / 15% / 20% /',
    'You can evolve into a race of your choice on MAD resets': '进化阶段可以直接选择一个核爆重置过的种族',
    'Start with 0% / 50% / 100% / 150% / 200 bonus RNA and DNA during evolution': '进化阶段额外获得 0% / 50% / 100% / 150% / 200% RNA 和 DNA',
    'Gain 1.5x / 2x / 2.5x / 3x / 3.5x more Genes from mutations': '基因突变获得的基因数量提升为原先的 1.5 / 2 / 2.5 / 3 / 3.5 倍',
    'See the numerical values of 1 / 2 / 3 / 5 / 7 of a planet\'s geology deposits during planet selection': '星球选择时，可查看 1 / 2 / 3 / 5 / 7 个该星球地质特性产量波动的详细数值',
    'Gain +1 / +2 / +3 / +4 / +5 free extra planet options during bioseeding': '播种重置后，可选星球额外增加 1 / 2 / 3 / 4 / 5 个',
    'Max Morale is increased by +2% / +4% / +6% / +8% / +': '士气上限增加 2% / 4% / 6% / 8% / ',
    'Steel smelting is boosted by 2% / 4% / 6% / 8% /': '钢产量增加 2% / 4% / 6% / 8% /',
    'Gain +1 base knowledge generation and +900 base knowledge storage': '基础知识产量增加 1，基础知识上限增加 900',
    'Can roll Iridium deposits on the moon during planet selection': '星球地质特性新增一种：铱矿产量波动',
    'Max quality of geology deposits increased by 5% / 10% / 15% / 20% /': '星球地质特性最大波动值增加 5% / 10% / 15% / 20% /',
    'Transport fuel costs reduced by 4% / 8% / 12% / 16% /': '交通燃料成本减少 4% / 8% / 12% / 16% /',
    'Coal Powerplants generate +1MW energy': '煤电厂电量增加 1MW',
    'Oil Powerplants generate +1kW (2-star) / +2 (4-star)MW energy': '石油发电厂电量增加 1MW(白星) / 2MW(银星)',
    'Casinos require 1MW less energy': '赌场电力消耗减少 1MW',
    'Mass drivers require 1MW less energy': '质量驱动器电力消耗减少 1MW',
    'Solar Swarm Satellites +0.15 Power.': '蜂群卫星发电量增加 0.15MW 。',
    '10% Factory Production.': '10% 工厂产量。',
    '6% Mining Drone Output.': '6% 采矿无人机产量。',
    '1 Spaceport Support.': '1 太空港支持。',
    'Unlocked Space Casinos for normal game use.': '解锁太空赌场。',
    '1 Geothermal Energy.': '2 地热发电厂发电量',
    'Reduce time before government can be changed again by -10% / -20% / -30% / -40% / -50% after a revolution.': '社会体制改革的冷却时间减少 10% / 20% / 30% / 40% / 50% 。',
    'Start with 25 Steel.': '开局拥有 25 钢。',
    'Thermal Collector ++% Efficiency': '集热器效率增加。',
    'Start with bonus Soul Gems.': '开局拥有额外的灵魂宝石。',
    '10% Soul Gem drop rate.': '10% 灵魂宝石掉率。',
    '1 / +2 / +3 / +4 / +5 per universe custom race complexity.': '1 / +2 / +3 / +4 / +5 基因奢侈税基础。自定义种族时，选择特质数量超出基础值将触发基因奢侈税，原基础为 4 个特质，现额外增加相应数量。',
    'Base RNA generation +0.5x / +1x / +1.5x / +2x / +2.5, Base DNA generation +0.25x / +0.5x / +0.75x / +1x / +1.25.': '基础 RNA 增长增加 0.5 / 1 / 1.5 / 2 / 2.5 倍，基础 DNA 增长增加 0.25 / 0.5 / 0.75 / 1 / 1.25 倍。',
    '1 / +1 / +2 / +2 / +3 Research Queue, +0 / +1 / +1 / +2 / +2 Build Queue.': '1 / +1 / +2 / +2 / +3 科研队列上限，+0 / +1 / +1 / +2 / +2 建筑队列上限。',


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
    "Raised your morale to 500%": "士气提升至 500% 。",
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
    [/^Earned (\d+) Achievements$/, '完成 $1 个成就。'],
    [/^Gain (\d+)x genes from genome mutation and (\d+)% more from auto sequencing$/, '基因突变获得的基因数量提升为原先的 $1 倍，自动测序获得的基因数量 +$2%'],
    [/^Gain increasing Plasmids from each mutation, caps at \+(\d+) per mutation.$/, '基因突变获得的质粒数量提升，上限为 $1'],
    [/^Craftsmen produce (\d+)% more product from the same amount of raw materials.$/, '工匠产量 +$1% （原料消耗保持不变）'],
    [/^([\d\.]+)% of Plasmids function in the antimatter universe$/, '在反物质宇宙，质粒的有效激活率为其他宇宙的 $1%'],
    [/^([\d\.]+)% of Anti-Plasmids function outside the antimatter universe$/, '在其他宇宙，反质粒的有效激活率为反物质宇宙的 $1%'],
    [/^(\d+) Plasmids$/, '$1 质粒'],
    [/^(\d+) Anti-Plasmids$/, '$1 反质粒'],
    [/^([\d\.]+)% Complete$/, '完成率：$1%'],
    [/^Standard Universe: (\d+) of (\d+) \($/, '标准宇宙：$1个已获得，共$2个('],
    [/^Heavy Universe: (\d+) of (\d+) \($/, '高引力宇宙：$1个已获得，共$2个('],
    [/^Micro Universe: (\d+) of (\d+) \($/, '微型宇宙：$1个已获得，共$2个('],
    [/^Evil Universe: (\d+) of (\d+) \($/, '邪恶宇宙：$1个已获得，共$2个('],
    [/^Antimatter Universe: (\d+) of (\d+) \($/, '反物质宇宙：$1个已获得，共$2个('],
    [/^\(([\d\.]+)% Complete$/, '个(完成率：$1%'],
    [/^\(([\d\.]+)% Purchased$/, '个(购买率：$1%'],
]);