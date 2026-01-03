--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (`email`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  UNIQUE (`name`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT IGNORE INTO `categories` (`name`) VALUES
('root'),
('cruciferous'),
('fruit'),
('leafy');

--
-- Dumping data for table `products`
--

INSERT IGNORE INTO `products` (`name`, `description`, `price`, `image`, `category_id`, `stock`, `unit`) VALUES
('Fresh Carrots', 'Organic, locally grown carrots. Rich in vitamins and fiber.', 1.99, 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37', 1, 50, 'bunch'),
('Broccoli', 'Fresh green broccoli florets, perfect for stir-fries and salads.', 2.49, 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc', 2, 30, 'head'),
('Tomatoes', 'Ripe, juicy tomatoes. Great for salads, sauces, and sandwiches.', 3.99, 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea', 3, 40, 'lb'),
('Spinach', 'Nutrient-rich spinach leaves, perfect for salads and cooking.', 2.99, 'https://images.unsplash.com/photo-1576045057995-568f588f82fb', 4, 25, 'bunch'),
('Bell Peppers', 'Colorful bell peppers, sweet and crunchy.', 1.79, 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83', 3, 35, 'each'),
('Cucumber', 'Cool and refreshing cucumbers, perfect for salads.', 1.29, 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e', 3, 45, 'each'),
('Potatoes', 'Versatile potatoes, great for roasting, mashing, or frying.', 4.99, 'https://images.unsplash.com/photo-1518977676601-b53f82aba655', 1, 60, 'bag'),
('Onions', 'Essential cooking ingredient, adds flavor to any dish.', 1.49, 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc', 1, 70, 'lb');

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `price` DECIMAL(10, 2) NOT NULL,
  `image` VARCHAR(255),
  `category_id` INT,
  `stock` INT NOT NULL DEFAULT 0,
  `unit` VARCHAR(50),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (`name`(191)),
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `carts`
--

CREATE TABLE IF NOT EXISTS `carts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `cart_items`
--

CREATE TABLE IF NOT EXISTS `cart_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `cart_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `total` DECIMAL(10, 2) NOT NULL,
  `status` ENUM('pending', 'approved', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
  `address` TEXT NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `order_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `order_items`
--

CREATE TABLE IF NOT EXISTS `order_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT NOT NULL,
  `product_id` INT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;