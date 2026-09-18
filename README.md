# 99Club Gaming Platform

A full-stack gaming and lottery prediction web application featuring **WinGo**, **5D**, **K3**, and **TRX WinGo**, along with third-party casino game integrations.

---

## 🔑 Login Credentials

### Web Portal
- **Local URL**: `https://99club.test`
- **Mobile Number**: `9309863630`
- **Password**: `bagalrohan555`

---

## 🎮 Supported Game Engines & Modes

The platform supports 16 real-time game modes across 4 major game suites:

| Suite | Game Mode | TypeID | Duration | Period Table | Bets Table | History Table |
|---|---|---|---|---|---|---|
| **WinGo** | Win 1 Minute | `1` | 60s | `gelluonduhogu` | `bajikattuttate` | `gellaluhogiondu_phalitansa` |
| **WinGo** | Win 3 Minute | `2` | 180s | `gelluonduhogu_drei` | `bajikattuttate_drei` | `gellaluhogiondu_phalitansa_drei` |
| **WinGo** | Win 5 Minute | `3` | 300s | `gelluonduhogu_funf` | `bajikattuttate_funf` | `gellaluhogiondu_phalitansa_funf` |
| **WinGo** | Win 30 Second | `4` | 30s | `gelluonduhogu_zehn` | `bajikattuttate_zehn` | `gellaluhogiondu_phalitansa_zehn` |
| **5D** | 5D 1 Minute | `5` | 60s | `gelluonduhogu_aidudi` | `bajikattuttate_aidudi` | `gellaluhogiondu_aidudi_phalitansa` |
| **5D** | 5D 3 Minute | `6` | 180s | `gelluonduhogu_aidudi_drei` | `bajikattuttate_aidudi_drei` | `gellaluhogiondu_aidudi_phalitansa_drei` |
| **5D** | 5D 5 Minute | `7` | 300s | `gelluonduhogu_aidudi_funf` | `bajikattuttate_aidudi_funf` | `gellaluhogiondu_aidudi_phalitansa_funf` |
| **5D** | 5D 10 Minute | `8` | 600s | `gelluonduhogu_aidudi_zehn` | `bajikattuttate_aidudi_zehn` | `gellaluhogiondu_aidudi_phalitansa_zehn` |
| **K3** | K3 1 Minute | `9` | 60s | `gelluonduhogu_kemuru` | `bajikattuttate_kemuru` | `gellaluhogiondu_kemuru_phalitansa` |
| **K3** | K3 3 Minute | `10` | 180s | `gelluonduhogu_kemuru_drei` | `bajikattuttate_kemuru_drei` | `gellaluhogiondu_kemuru_phalitansa_drei` |
| **K3** | K3 5 Minute | `11` | 300s | `gelluonduhogu_kemuru_funf` | `bajikattuttate_kemuru_funf` | `gellaluhogiondu_kemuru_phalitansa_funf` |
| **K3** | K3 10 Minute | `12` | 600s | `gelluonduhogu_kemuru_zehn` | `bajikattuttate_kemuru_zehn` | `gellaluhogiondu_kemuru_phalitansa_zehn` |
| **TRX** | TRX Win 1 Minute | `13` | 60s | `gelluonduhogu_trx` | `bajikattuttate_trx` | `gellaluhogiondu_trx` |
| **TRX** | TRX Win 3 Minute | `14` | 180s | `gelluonduhogu_trx3` | `bajikattuttate_trx3` | `gellaluhogiondu_trx3` |
| **TRX** | TRX Win 5 Minute | `15` | 300s | `gelluonduhogu_trx5` | `bajikattuttate_trx5` | `gellaluhogiondu_trx5` |
| **TRX** | TRX Win 10 Minute | `16` | 600s | `gelluonduhogu_trx10` | `bajikattuttate_trx10` | `gellaluhogiondu_trx10` |

---

## 🛠 System Requirements

- **PHP**: `8.1` (Required) with extensions: `mysqli`, `curl`, `json`, `mbstring`, `openssl`
- **Web Server**: Laravel Herd, Laravel Valet, Nginx, or Apache
- **Database**: MySQL 5.7+ or MySQL 8.0+ / MariaDB
- **Timezone**: `Asia/Kolkata` (Configured across all endpoints)

---

## 🚀 Installation & Setup

### 1. Database Setup
Create MySQL database and user:
```sql
CREATE DATABASE clubvbra_bull34 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'clubvbra_bull34'@'localhost' IDENTIFIED BY 'clubvbra_bull34';
GRANT ALL PRIVILEGES ON clubvbra_bull34.* TO 'clubvbra_bull34'@'localhost';
FLUSH PRIVILEGES;
```

Import the database schema and seed data:
```bash
mysql -u clubvbra_bull34 -pclubvbra_bull34 clubvbra_bull34 < clubvbra_bull34.sql
```

Database connection settings are located in:
- `Teacherlara/conn.php`
- `serive/samparka.php`
- `db_conn.php`

### 2. Web Server Configuration (Laravel Herd)
Link the site in Herd:
```bash
cd /path/to/99club
herd link 99club
herd isolate php@8.1
herd secure 99club
```
The site will be available at `https://99club.test`.

### 3. Background Game Engine Daemon
To automatically advance periods, roll dice/numbers, and settle payouts for all 16 game modes in real-time, run the central background daemon:
```bash
php cron_runner.php
```

To run it continuously in the background (as a system service or nohup):
```bash
nohup php cron_runner.php > cron_daemon.log 2>&1 &
```

> **Note**: Each game endpoint (`GetGameIssue.php`, `GetGame5DIssue.php`, `GetGameK3Issue.php`, `GetTRXGameIssue.php`) also incorporates on-demand auto-advancement. Even if the daemon is temporarily offline, visiting any game page will automatically synchronize and present a fresh, active countdown period.

---

## 🏗 Key Architectural Bug Fixes Applied

1. **Timer Freeze & Clamping Resolved**:
   - Fixed hardcoded 1-minute durations for 3M, 5M, 10M, and 30S modes across `GetGameIssue.php`, `GetGame5DIssue.php`, and `GetTRXGameIssue.php`.
   - All modes now compute exact countdown end times matching their interval.

2. **Blocked Sleep Loops Removed**:
   - Removed blocking `waitForSecond('00')` and `waitForFiveMinutes()` sleep loops in `niyamitakelasa*.php` that caused server timeouts and hung PHP-FPM workers.

3. **Data Loss & Corruption Prevented**:
   - **WinGo Protection**: Fixed `TRUNCATE TABLE \`gelluonduhogu\`` in `ktrx.php` and `ktrx10.php` which was erroneously wiping WinGo's active period table during TRX day rollovers.
   - **Wallet Protection**: Removed malicious/buggy query in `Teacherlara/api/webapi/GetGameUrl.php` that zeroed out user wallet balances (`motta = 0`) when launching third-party games.
   - **Idempotency Guards**: Added checks across all settlement scripts to prevent duplicate payout credits.

4. **TRX WinGo Engine Completed**:
   - Built missing period generator `ktrx3.php` and settlement script `trx3.php` for TRX 3M.
   - Built missing period generator `ktrx5.php` and settlement script `trx10.php` for TRX 10M.
   - Added cURL timeouts and offline pseudo-random fallback block hash generation in `trx1.php` and `trxupkid5.php` so settlement never hangs if TronGrid or TronScan is unreachable.

5. **CORS Headers Corrected**:
   - Fixed hardcoded origin header in `GetThirdGameList.php` to enable third-party game listing.
