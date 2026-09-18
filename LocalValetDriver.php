<?php

use Valet\Drivers\BasicValetDriver;

class LocalValetDriver extends BasicValetDriver
{
    /**
     * Determine if the driver serves the request.
     */
    public function serves(string $sitePath, string $siteName, string $uri): bool
    {
        return true;
    }

    /**
     * Determine if the incoming request is for a static file.
     */
    public function isStaticFile(string $sitePath, string $siteName, string $uri)
    {
        // Handle /web/config query
        if (str_starts_with($uri, '/web/config')) {
            if (file_exists($sitePath . '/web/config.js')) {
                return $sitePath . '/web/config.js';
            }
        }

        // If there is a corresponding PHP file without .php in URI, it is dynamic
        if (file_exists($sitePath . $uri . '.php')) {
            return false;
        }

        return parent::isStaticFile($sitePath, $siteName, $uri);
    }

    /**
     * Get the fully resolved path to the application's front controller.
     */
    public function frontControllerPath(string $sitePath, string $siteName, string $uri): ?string
    {
        $cleanUri = rtrim(explode('?', $uri)[0], '/');

        // 1. Direct .php match (e.g., /Teacherlara/api/webapi/GetHomeSettings -> /Teacherlara/api/webapi/GetHomeSettings.php)
        if (file_exists($candidate = $sitePath . $cleanUri . '.php')) {
            $_SERVER['SCRIPT_FILENAME'] = $candidate;
            $_SERVER['SCRIPT_NAME'] = str_replace($sitePath, '', $candidate);
            $_SERVER['DOCUMENT_ROOT'] = $sitePath;
            return $candidate;
        }

        // 2. Direct script match if .php is already in uri
        if (file_exists($candidate = $sitePath . $cleanUri) && is_file($candidate) && str_ends_with($candidate, '.php')) {
            $_SERVER['SCRIPT_FILENAME'] = $candidate;
            $_SERVER['SCRIPT_NAME'] = str_replace($sitePath, '', $candidate);
            $_SERVER['DOCUMENT_ROOT'] = $sitePath;
            return $candidate;
        }

        // 3. Directory with index.php
        if (file_exists($candidate = $sitePath . $cleanUri . '/index.php')) {
            $_SERVER['SCRIPT_FILENAME'] = $candidate;
            $_SERVER['SCRIPT_NAME'] = str_replace($sitePath, '', $candidate);
            $_SERVER['DOCUMENT_ROOT'] = $sitePath;
            return $candidate;
        }

        // 4. Default fallback to parent (index.html, etc.)
        return parent::frontControllerPath($sitePath, $siteName, $uri);
    }
}

