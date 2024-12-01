<?php

session_start(); // Start session for user authentication
include_once 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Clear any existing session data
    session_unset();
    session_destroy();
    session_start();

    $username = $_POST['username'];
    $password = $_POST['password'];
    $error = 'Invalid username or password. Please try again.';

    try {
        // Check if the user is an admin
        $stmt = $conn->prepare("SELECT * FROM admintb WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($admin && $password === $admin['password']) {
            // Set session for admin and redirect
            $_SESSION['role'] = 'admin';
            $_SESSION['username'] = $admin['username'];
            header("Location: ../pages/dashboard.php");
            exit();
        }

        $stmt = $conn->prepare("SELECT * FROM admintb WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $superadmin = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($superadmin && $password === $superadmin['password']) {
            // Set session for admin and redirect
            $_SESSION['role'] = 'super_admin';
            $_SESSION['username'] = $superadmin['username'];
            header("Location: ../pages/dashboard.php");
            exit();
        }

        
        
        // Check if the user is a seller
        $stmt = $conn->prepare("SELECT * FROM sellertb WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $seller = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($seller) {
            // Check if the seller is verified
            if ($seller['status'] !== 'Verified') {
                // Seller is not verified, show error
                $error = 'Your account is not verified yet. Please contact support.';
                header("Location: ../pages/login.php?error=" . urlencode($error));
                exit();
            }

            // Verify password
            if (password_verify($password, $seller['password'])) {
                // Set session for seller and redirect
                $_SESSION['role'] = 'seller';
                $_SESSION['seller_id'] = $seller['seller_id'];
                $_SESSION['username'] = $seller['username'];
                header("Location: ../pages/seller.php");
                exit();
            } else {
                // Invalid password
                header("Location: ../pages/login.php?error=" . urlencode($error));
                exit();
            }
        }

        // If neither admin nor seller matches
        header("Location: ../pages/login.php?error=" . urlencode($error));
        exit();
    } catch (PDOException $e) {
        header("Location: ./pages/login.php?error=" . urlencode('Error: ' . $e->getMessage()));
        exit();
    }
}
 
?>