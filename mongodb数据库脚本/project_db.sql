/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 40201
 Source Host           : localhost:27017
 Source Schema         : project_db

 Target Server Type    : MongoDB
 Target Server Version : 40201
 File Encoding         : 65001

 Date: 28/08/2020 16:15:29
*/


// ----------------------------
// Collection structure for coursewares
// ----------------------------
db.getCollection("coursewares").drop();
db.createCollection("coursewares");

// ----------------------------
// Documents of coursewares
// ----------------------------
db.getCollection("coursewares").insert([ {
    _id: ObjectId("5f47baa284fe556f3ccd37a6"),
    title: "第一章第2节 变量的基本类型",
    contentUrl: "4f1ef343206f4338084b169f180a3832.ppt",
    sortId: "1",
    __v: NumberInt("0")
} ]);
db.getCollection("coursewares").insert([ {
    _id: ObjectId("5f48a5034d2f3136e0bb4c4b"),
    title: "第二章第1节 程序流程控制",
    contentUrl: "443392f2086b90d412fe09cfca8a4938.ppt",
    sortId: "2",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for informs
// ----------------------------
db.getCollection("informs").drop();
db.createCollection("informs");

// ----------------------------
// Documents of informs
// ----------------------------
db.getCollection("informs").insert([ {
    _id: ObjectId("5f47bb1c84fe556f3ccd37a7"),
    title: "关于2020级本科生《JAVA程序设计》课程考试的通知",
    content: "1.考试时间  2020年9月10日17:40-20:10  2.考试形式：闭卷  3.考试地点  经信F8,1-3班；  经信F9,4-6班；  经信F10,7-9班；  经信F11,10班、重修；  4.注意  1）学生必须带学生证和身份证参加考试，二者缺一不可，提前十分钟进入考场，按指定座位入座，迟到二十分钟者不准参加考试。  2） 以前办缓考的同学参加本次考试，请考试前到教务办公室报名参加考试。  3）已结业离校的学生必须携带身份证等有效身份证件参加考试，并于考试前到学院确认是否已经选课方可参加考试，否则不予安排考试座位和考试试卷。  4） 还没有在网上选课的需要重修同学，请在考试前3个工作日前到学院教务办报名选课（只能选专业课），否则不能参加考试，后果自负。",
    publisher: "系管理员",
    time: "1598536476364",
    timel: "2020-08-27 21:54:36",
    __v: NumberInt("0")
} ]);
db.getCollection("informs").insert([ {
    _id: ObjectId("5f48a91c4d2f3136e0bb4c51"),
    title: "关于做好2020届本科毕业生课程重修考试的通知",
    content: "根据学校《关于进一步明确本科生课程考核等有关问题的通知》（校教字【2018】47号）文件规定，为学生顺利完成学业提供有效支撑，本着以人为本的理念，结合实际需要，现就2020届本科毕业生课程重修考试有关问题明确如下：      一、2020届本科毕业生（含结业换毕业学生）按规定已正常选课重修的，按计划参加重修考试，最晚7月6日之前成绩录入完毕。     二、对2020届本科生第七学期（五年制第九学期）首次修课考核未通的课程，在毕业前给予一次重修考试的机会。符合上述条件的学生须于第八学期（五年制第十学期）内向所在学院提出书面申请，学院汇总后报教务处审批，由开课单位安排组织考试，考试方式自定，最晚6月10之前成绩录入完毕。     三、对毕业年级仅剩一门课程未通过的、且本学期不开课的学生增加给予重修考试机会。     若毕业年级学生在毕业资格审核时（时间截止到2020年5月11日），仅剩一门课程未通过且本学期学校未开设该课程，毕业前给予该生该课程一次重修考试的机会。符合上述条件的学生须于2020年5月20日前向所在学院提出书面申请，经校区教务办审核汇总后，报教务处审批，由开课单位或校区教务办安排组织考试，考试方式自定， 最晚6月10之前成绩录入完毕。     四、允许已结业离校、且只差一门课未通过且本学期不开课的学生提前半年参加重修考试。     对仅差一门必修课或限选课未通过而结业离校的学生，在其未达到规定的最长学习年限情况下，可以在其离校后一学年内，分别于秋季学期和春季学期，给予一次重修考试机会。符合上述条件的学生须于2020年5月20日前向所在学院提出书面申请，经校区教务办审核汇总后，报教务处审批，由开课单位或校区教务办安排组织考试， 考试方式自定，最晚6月10之前成绩录入完毕。",
    publisher: "学校宣传委",
    time: "1598597404002",
    timel: "2020-08-28 14:50:04",
    __v: NumberInt("0")
} ]);
db.getCollection("informs").insert([ {
    _id: ObjectId("5f48a9424d2f3136e0bb4c52"),
    title: "关于软件学院2019级本科生转专业面试工作安排的通知",
    content: "面试时间：2020年8月28日（周五）上午8：00；下午13：00  面试地点：计算机楼B321  面试要求：面试分二组进行，具体分组名单请见附件。请考生携带学生证、身份证和成绩单原件，提前十分钟到面试地点等候，学生证或身份证缺失者请到本人所在学院出具相关证明，证件不全者不予面试。",
    publisher: "校管理处",
    time: "1598597442323",
    timel: "2020-08-28 14:50:42",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for outlines
// ----------------------------
db.getCollection("outlines").drop();
db.createCollection("outlines");

// ----------------------------
// Documents of outlines
// ----------------------------
db.getCollection("outlines").insert([ {
    _id: ObjectId("5f47bb4f84fe556f3ccd37a8"),
    courseName: "java程序设计",
    courseNameEn: "Java Program Design",
    courseCode: "KC001",
    period: "32",
    credit: "3.5",
    penner: "王晓婷",
    discussants: "李光明，张潇，王涛",
    auditor: "李国铭",
    textUrl: "2ef66dd5d4c79a84149081a021630df6.html",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for pbvideos
// ----------------------------
db.getCollection("pbvideos").drop();
db.createCollection("pbvideos");

// ----------------------------
// Documents of pbvideos
// ----------------------------
db.getCollection("pbvideos").insert([ {
    _id: ObjectId("5f47bb7284fe556f3ccd37a9"),
    title: "Java课程报名开始了",
    subTitle: "Java Course signup is beginning",
    videoUrl: "2732ef7ef8a4546df6f19a0463b14576.mp4",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for tecodes
// ----------------------------
db.getCollection("tecodes").drop();
db.createCollection("tecodes");

// ----------------------------
// Documents of tecodes
// ----------------------------
db.getCollection("tecodes").insert([ {
    _id: ObjectId("5f47ba2c84fe556f3ccd37a5"),
    title: "Java 条件语句 - if...else",
    content: "了解学习java基本流程之if....else",
    textUrl: "10a9e5af3db1a2e30e89aafa33f5345b.html",
    __v: NumberInt("0")
} ]);
db.getCollection("tecodes").insert([ {
    _id: ObjectId("5f48a75d4d2f3136e0bb4c4d"),
    title: "Java 发送邮件",
    content: "利用java发送一封简单的邮件",
    textUrl: "19245aa9c84c2f987b3795fbbb1693d6.html",
    __v: NumberInt("0")
} ]);
db.getCollection("tecodes").insert([ {
    _id: ObjectId("5f48a7b54d2f3136e0bb4c4e"),
    title: "Java 循环结构 ",
    content: "Java 循环结构 - for, while 及 do...while",
    textUrl: "93014dbe90f0fb5fa977b6fa61e0f857.html",
    __v: NumberInt("0")
} ]);
db.getCollection("tecodes").insert([ {
    _id: ObjectId("5f48a80a4d2f3136e0bb4c4f"),
    title: "Java 枚举(enum)",
    content: "Java 枚举是一个特殊的类，一般表示一组常量，比如一年的 4 个季节，一个年的 12 个月份，一个星期的 7 天，方向有东南西北等。\n\nJava 枚举类使用 enum 关键字来定义，各个常量使用逗号 , 来分割。",
    textUrl: "854b7db66f6237bd058ebb80df50fe91.html",
    __v: NumberInt("0")
} ]);
db.getCollection("tecodes").insert([ {
    _id: ObjectId("5f48a83f4d2f3136e0bb4c50"),
    title: "Java 数组",
    content: "数组对于每一门编程语言来说都是重要的数据结构之一，当然不同语言对数组的实现及处理也不尽相同。\n\nJava 语言中提供的数组是用来存储固定大小的同类型元素。\n\n你可以声明一个数组变量，如 numbers[100] 来代替直接声明 100 个独立变量 number0，number1，....，number99。\n\n本教程将为大家介绍 Java 数组的声明、创建和初始化，并给出其对应的代码。",
    textUrl: "ea78a80ab76a5c764badee03bc232f44.html",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for tevideos
// ----------------------------
db.getCollection("tevideos").drop();
db.createCollection("tevideos");

// ----------------------------
// Documents of tevideos
// ----------------------------
db.getCollection("tevideos").insert([ {
    _id: ObjectId("5f4799c4dcce0b2f88dd4665"),
    sectionlist: [
        {
            sectionName: "第一节",
            sectionTitle: "变量数据类型",
            videoUrl: "2732ef7ef8a4546df6f19a0463b14576.mp4",
            time: "1598528075270",
            fatherId: "5f4799c4dcce0b2f88dd4665"
        }
    ],
    chapterName: "第一章",
    chapterTitle: "java数据类型",
    __v: NumberInt("0")
} ]);
db.getCollection("tevideos").insert([ {
    _id: ObjectId("5f48a52e4d2f3136e0bb4c4c"),
    sectionlist: [
        {
            videoUrl: "2732ef7ef8a4546df6f19a0463b14576.mp4",
            sectionName: "第1节",
            sectionTitle: " if...else流程控制",
            fatherId: "5f48a52e4d2f3136e0bb4c4c",
            time: "1598596439194"
        },
        {
            videoUrl: "2732ef7ef8a4546df6f19a0463b14576.mp4",
            sectionName: "第2节",
            sectionTitle: "循环流程控制",
            fatherId: "5f48a52e4d2f3136e0bb4c4c",
            time: "1598596460370"
        }
    ],
    chapterName: "第2章",
    chapterTitle: " 程序流程控制",
    __v: NumberInt("0")
} ]);
