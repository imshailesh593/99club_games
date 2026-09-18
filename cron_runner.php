<?php
/**
 * Background Game Cron Runner for local Laravel Herd development.
 * Automatically runs game settlement and progression scripts.
 * 
 * Usage:
 *   php cron_runner.php
 */

date_default_timezone_set("Asia/Kolkata");

$baseDir = __DIR__;
$phpBin = '/Users/dexter/Library/Application Support/Herd/bin/php81';
if (!file_exists($phpBin)) {
    $phpBin = 'php';
}

$jobs = [
    // WinGo Games (TypeIDs 1, 2, 3, 4)
    ['script' => 'niyamitakelasa.php', 'interval' => 60, 'last_run' => 0],
    ['script' => 'niyamitakelasa_drei.php', 'interval' => 180, 'last_run' => 0],
    ['script' => 'niyamitakelasa_funf.php', 'interval' => 300, 'last_run' => 0],
    ['script' => 'niyamitakelasa_zehn.php', 'interval' => 30, 'last_run' => 0],
    
    // 5D Games (TypeIDs 5, 6, 7, 8)
    ['script' => 'niyamitakelasa_aidudi.php', 'interval' => 60, 'last_run' => 0],
    ['script' => 'niyamitakelasa_aidudi_drei.php', 'interval' => 180, 'last_run' => 0],
    ['script' => 'niyamitakelasa_aidudi_funf.php', 'interval' => 300, 'last_run' => 0],
    ['script' => 'niyamitakelasa_aidudi_zehn.php', 'interval' => 600, 'last_run' => 0],

    // K3 Games (TypeIDs 9, 10, 11, 12)
    ['script' => 'niyamitakelasa_kemuru.php', 'interval' => 60, 'last_run' => 0],
    ['script' => 'niyamitakelasa_kemuru_drei.php', 'interval' => 180, 'last_run' => 0],
    ['script' => 'niyamitakelasa_kemuru_funf.php', 'interval' => 300, 'last_run' => 0],
    ['script' => 'niyamitakelasa_kemuru_zehn.php', 'interval' => 600, 'last_run' => 0],

    // TRX WinGo Games (TypeIDs 13, 14, 15, 16)
    ['script' => 'ktrx.php', 'interval' => 60, 'last_run' => 0],
    ['script' => 'ktrx3.php', 'interval' => 180, 'last_run' => 0],
    ['script' => 'ktrx5.php', 'interval' => 300, 'last_run' => 0],
    ['script' => 'ktrx10.php', 'interval' => 600, 'last_run' => 0],
];

echo "[" . date('Y-m-d H:i:s') . "] Starting 99Club Complete Game Daemon (" . count($jobs) . " game modes)..." . PHP_EOL;

while (true) {
    $now = time();
    foreach ($jobs as &$job) {
        if ($now - $job['last_run'] >= $job['interval']) {
            $scriptPath = $baseDir . '/' . $job['script'];
            if (file_exists($scriptPath)) {
                $cmd = escapeshellcmd($phpBin) . " " . escapeshellarg($scriptPath) . " > /dev/null 2>&1 &";
                exec($cmd);
                $job['last_run'] = $now;
                echo "[" . date('Y-m-d H:i:s') . "] Ran {$job['script']}" . PHP_EOL;
            }
        }
    }
    unset($job);
    sleep(1);
}
