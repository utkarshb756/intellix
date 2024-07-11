-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: mysql-15feae6e-aisaas756.e.aivencloud.com    Database: defaultdb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '91e0a90d-37e3-11ef-a0d6-e642af66bd8e:1-68';

--
-- Table structure for table `UserApiLimit`
--
AVNS_ap5qMt3exGAnUWmZDvb

DROP TABLE IF EXISTS `UserApiLimit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserApiLimit` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserApiLimit_userId_key` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserApiLimit`
--

LOCK TABLES `UserApiLimit` WRITE;
/*!40000 ALTER TABLE `UserApiLimit` DISABLE KEYS */;
INSERT INTO `UserApiLimit` VALUES ('cly4clj8g0000bksa7yx6q9f2','user_2ign9wa9JxXsMpsKst25cUqUBrp',2,'2024-07-02 11:51:10.240','2024-07-02 11:51:53.327'),('cly4ozl2e0000x8z16zga9sbw','user_2iHcjGDE34aly7dQtQj9r1yD3vp',8,'2024-07-02 17:38:01.191','2024-07-06 17:48:05.792'),('clyaikqa90000nhdcese7ffmi','user_2iafnmETLvwmquCCTjPqazKNnhe',2,'2024-07-06 19:25:07.474','2024-07-06 19:27:28.643');
/*!40000 ALTER TABLE `UserApiLimit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserSubscription`
--

DROP TABLE IF EXISTS `UserSubscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserSubscription` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_customer_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stripe_subscription_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stripe_price_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stripe_current_period_end` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserSubscription_userId_key` (`userId`),
  UNIQUE KEY `UserSubscription_stripe_customer_id_key` (`stripe_customer_id`),
  UNIQUE KEY `UserSubscription_stripe_subscription_id_key` (`stripe_subscription_id`),
  UNIQUE KEY `UserSubscription_stripe_price_id_key` (`stripe_price_id`),
  UNIQUE KEY `UserSubscription_stripe_current_period_end_key` (`stripe_current_period_end`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserSubscription`
--

LOCK TABLES `UserSubscription` WRITE;
/*!40000 ALTER TABLE `UserSubscription` DISABLE KEYS */;
INSERT INTO `UserSubscription` VALUES ('cly4b926v0000kxfhztbjd85l','user_2iHKsFJgTi57WH98GfdZBBG89t5','cus_QOsPJcDgqk6uZe','sub_1PY4eDCWFAdUqjCxui4PonhH','price_1PY4e5CWFAdUqjCxjeVMDd3c','2024-08-02 11:13:21.000'),('cly4bbgbj0001kxfhhuivmf5l','user_2igi8gKjJ14G4ix2TeW8vfIBmlr','cus_QOsQ68pVTC9KtG','sub_1PY4g2CWFAdUqjCxMVebiNFq','price_1PY4fVCWFAdUqjCxgpFQK3DQ','2024-08-02 11:15:14.000'),('cly8k9a5w0000yclyunl2kaz5','user_2ip0DKio8sZ5jPWikUEpC1gRYPM','cus_QPyVk14CggRJlr','sub_1PZ8Y2CWFAdUqjCxch23qCWk','price_1PZ8XtCWFAdUqjCxYR21xSM3','2024-08-05 09:35:22.000'),('cly8wrc5g0000w3e8t119m8zp','user_2ip5pUlYko7XmNjTXhlKazJup6q','cus_QQ587WGZ3yyEIA','sub_1PZExvCWFAdUqjCxq0EDbh2L','price_1PZExlCWFAdUqjCxB5cgURsb','2024-08-05 16:26:31.000');
/*!40000 ALTER TABLE `UserSubscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'defaultdb'
--
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-11 18:34:14
