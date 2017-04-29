-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-11-28 16:18:44
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jike`
--

-- --------------------------------------------------------

--
-- 表的结构 `newsbaidu`
--

CREATE TABLE `newsbaidu` (
  `id` int(11) NOT NULL,
  `newstype` char(200) DEFAULT NULL,
  `newstitle` varchar(200) DEFAULT NULL,
  `newsimg` varchar(200) DEFAULT NULL,
  `newstime` datetime DEFAULT NULL,
  `newssrc` char(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `newsbaidu`
--

INSERT INTO `newsbaidu` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(21, '精选', '测试', 'img/1.jpg', '2016-11-08 00:00:00', 'bug'),
(22, '社会', '希拉里失败', 'img/2.jpg', '2016-11-23 00:00:00', '王宁'),
(23, '精选', '世界互联网大会观察：人工智能成主角', 'img/3.jpg', '2016-11-19 00:00:00', '热点'),
(24, '精选', '习大大抵达秘鲁', 'img/2.jpg', '2016-11-20 00:00:00', '百度'),
(27, '社会', '四川悬崖村新天梯修好，孩子们安全回家', 'img/4.jpg', '2016-11-20 00:00:00', '王宁'),
(28, '娱乐', '票房破亿!《我不是潘金莲》喜剧风暴席卷沪上', 'img/5.jpg', '2016-11-20 00:00:00', '搜狐'),
(29, '百家', '双十一之后的退货潮，千亿交易会缩水吗？', 'img/6.jpg', '2016-11-20 00:00:00', '百度'),
(31, '本地', '北京花姐燕郊养老', 'img/7.jpg', '2016-11-20 00:00:00', '新浪'),
(32, '社会', '14岁少年通过倒卖土地赚了200万英镑', 'img/8.jpg', '2016-11-20 00:00:00', '百度'),
(33, '社会', '一年零三个月 湖南父子在重庆江津终于再度重逢', 'img/9.jpg', '2016-11-20 00:00:00', '百度'),
(34, '娱乐', '范冰冰晒素颜自拍，“黑”张译 网友：路演辛苦', 'img/10.jpg', '2016-11-20 00:00:00', '百度'),
(35, '娱乐', '张阳阳举办首签会 带来《未什么来》的首秀表演', 'img/11.jpg', '2016-11-20 00:00:00', '百度'),
(37, '精选', '&lt;script&gt;哈喽&lt;script&gt;', 'img/1.jpg', '2016-11-11 00:00:00', '极客'),
(40, '精选', '测试', 'img/1.jpg', '2016-11-11 22:10:00', 'jike'),
(41, '本地', 'hah ', 'img/1.jpg', '2016-11-20 22:00:00', '极客'),
(42, '本地', 'update', 'img/2.jpg', '2016-11-10 00:00:00', '极客');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newsbaidu`
--
ALTER TABLE `newsbaidu`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `newsbaidu`
--
ALTER TABLE `newsbaidu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
