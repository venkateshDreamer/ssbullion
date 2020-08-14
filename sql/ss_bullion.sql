-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2020 at 05:51 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ss_bullion`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `Company` varchar(250) NOT NULL,
  `Bank` varchar(250) NOT NULL,
  `Account` varchar(250) NOT NULL,
  `IFSC` varchar(250) NOT NULL,
  `Swift_Code` varchar(250) NOT NULL,
  `Branch` varchar(250) NOT NULL,
  `Country` varchar(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id`, `Company`, `Bank`, `Account`, `IFSC`, `Swift_Code`, `Branch`, `Country`, `created_at`, `updated_at`) VALUES
(1, 'ssbullion', 'test1234', '12435778789', 'fds', 'rew', 'vdf', 'india', '2020-07-15 05:07:07', '2020-08-14 05:03:40');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mobile` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `address` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `mobile`, `phone`, `address`, `created_at`, `updated_at`) VALUES
(1, '9897654321', '98976543212', '9876541302', 'test', '2020-08-14 15:14:18', '2020-08-14 15:24:23');

-- --------------------------------------------------------

--
-- Table structure for table `enquires`
--

CREATE TABLE `enquires` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `message` longtext NOT NULL,
  `is_read` int(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enquires`
--

INSERT INTO `enquires` (`id`, `name`, `phone`, `message`, `is_read`, `created_at`, `updated_at`) VALUES
(1, 'Test', '9876543210', 'Testing', 1, '2020-08-14 09:55:33', '2020-08-14 09:55:33');

-- --------------------------------------------------------

--
-- Table structure for table `market`
--

CREATE TABLE `market` (
  `id` int(11) NOT NULL,
  `market` varchar(250) NOT NULL DEFAULT '0-off, 1-on',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `market`
--

INSERT INTO `market` (`id`, `market`, `created_at`, `updated_at`) VALUES
(1, '0', '2020-07-15 06:13:44', '2020-08-14 04:33:11');

-- --------------------------------------------------------

--
-- Table structure for table `price_sell`
--

CREATE TABLE `price_sell` (
  `id` int(11) NOT NULL,
  `rtgsbuy9999` int(250) NOT NULL DEFAULT 0,
  `retail_buy9999` int(250) NOT NULL DEFAULT 0,
  `rtgs_buy999` int(250) NOT NULL DEFAULT 0,
  `retail_buy999` int(250) NOT NULL DEFAULT 0,
  `rtgs_buy9950` int(250) NOT NULL DEFAULT 0,
  `retail_buy9950` int(11) DEFAULT 0,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `price_sell`
--

INSERT INTO `price_sell` (`id`, `rtgsbuy9999`, `retail_buy9999`, `rtgs_buy999`, `retail_buy999`, `rtgs_buy9950`, `retail_buy9950`, `updated_at`) VALUES
(1, 564555, 544444, 54, 54, 54, 54, '2020-08-14 04:25:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquires`
--
ALTER TABLE `enquires`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `market`
--
ALTER TABLE `market`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `price_sell`
--
ALTER TABLE `price_sell`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `enquires`
--
ALTER TABLE `enquires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `market`
--
ALTER TABLE `market`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `price_sell`
--
ALTER TABLE `price_sell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
