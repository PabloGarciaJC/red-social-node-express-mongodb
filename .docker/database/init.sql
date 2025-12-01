-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 17-07-2025 a las 15:52:44
-- Versión del servidor: 9.3.0
-- Versión de PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `parent_id` int DEFAULT NULL,
  `imagenes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `idioma_id` int NOT NULL DEFAULT '1',
  `grupo_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `parent_id`, `imagenes`, `idioma_id`, `grupo_id`) VALUES
(592, ' Electrónica', 'La electrónica comprende dispositivos eléctricos o electrónicos diseñados para mejorar diversos aspectos de la vida cotidiana, aumentar la eficiencia y ofrecer soluciones innovadoras en comunicación, entretenimiento y funcionalidad. Estos equipos son fundamentales en la vida moderna y abarcan una amplia gama de aplicaciones, desde gadgets personales hasta sistemas avanzados para el hogar.', NULL, '[\"1735831690_mm2.jpg\"]', 1, 1735808038),
(593, 'Electronics', 'Electronics are electrical or electronic devices designed to enhance various aspects of daily life, improve efficiency, and provide innovative solutions for communication, entertainment, and functionality. These devices are integral to modern living and include a wide range of applications, from personal gadgets to advanced home systems.', NULL, '[\"1735831690_mm2.jpg\"]', 2, 1735808038),
(594, 'L\'électronique', 'L\'électronique regroupe des dispositifs électriques ou électroniques conçus pour améliorer divers aspects de la vie quotidienne, accroître l\'efficacité et offrir des solutions innovantes en matière de communication, de divertissement et de fonctionnalité. Ces appareils sont essentiels dans la vie moderne et couvrent un large éventail d\'applications, allant des gadgets personnels aux systèmes domestiques avancés.', NULL, '[\"1735831690_mm2.jpg\"]', 3, 1735808038),
(604, 'Accesorios', 'Los accesorios son productos diseñados para complementar y mejorar el uso de dispositivos electrónicos. Desde fundas y protectores hasta cargadores y auriculares, ofrecen una mayor funcionalidad y personalización a tus dispositivos.', NULL, '[\"1735831078_b2.jpg\"]', 1, 1735804773),
(605, 'Accessories', 'Accessories are products designed to complement and enhance the use of electronic devices. From cases and screen protectors to chargers and headphones, they offer greater functionality and personalization for your devices.', NULL, '[\"1735831078_b2.jpg\"]', 2, 1735804773),
(606, 'Accessoires', 'Les accessoires sont des produits conçus pour compléter et améliorer l\'utilisation des appareils électroniques. Des étuis et protecteurs d\'écran aux chargeurs et écouteurs, ils offrent une plus grande fonctionnalité et personnalisation de vos appareils.', NULL, '[\"1735831078_b2.jpg\"]', 3, 1735804773),
(607, 'Móviles', 'La categoría de móviles incluye una amplia gama de teléfonos inteligentes diseñados para ofrecer funcionalidades avanzadas como comunicación, entretenimiento y productividad. Con diferentes sistemas operativos, tamaños de pantalla y características, los móviles son esenciales para la vida diaria, conectando a las personas de manera rápida y eficiente.', 1735808038, '[\"1735831416_ivoomiiseries.png\"]', 1, 1735806505),
(608, 'Mobile Phones', 'The mobile phones category includes a wide range of smartphones designed to provide advanced functionalities such as communication, entertainment, and productivity. With different operating systems, screen sizes, and features, mobile phones are essential for daily life, connecting people quickly and efficiently.', 1735808038, '[\"1735831416_ivoomiiseries.png\"]', 2, 1735806505),
(609, 'Téléphones Mobiles', 'La catégorie des téléphones mobiles comprend une large gamme de smartphones conçus pour offrir des fonctionnalités avancées telles que la communication, le divertissement et la productivité. Avec différents systèmes d\'exploitation, tailles d\'écran et caractéristiques, les téléphones mobiles sont essentiels à la vie quotidienne, permettant de connecter les gens rapidement et efficacement.', 1735808038, '[\"1735831416_ivoomiiseries.png\"]', 3, 1735806505),
(610, 'Tablets', 'La categoría de tablets incluye dispositivos portátiles con pantallas táctiles de mayor tamaño que los teléfonos móviles, diseñados para ofrecer una experiencia multimedia óptima. Son ideales para la navegación por internet, el consumo de contenido, la productividad y el entretenimiento en cualquier lugar, con sistemas operativos versátiles y potentes.', 1735808038, '[\"1735831459_tablet-alcatel-2.png\"]', 1, 1735806765),
(611, 'Tablets', 'The tablets category includes portable devices with larger touchscreens than mobile phones, designed to provide an optimal multimedia experience. They are perfect for browsing the internet, consuming content, productivity, and entertainment anywhere, featuring versatile and powerful operating systems.', 1735808038, '[\"1735831459_tablet-alcatel-2.png\"]', 2, 1735806765),
(612, 'Tablettes', 'La catégorie des tablettes comprend des appareils portables avec des écrans tactiles plus grands que ceux des téléphones mobiles, conçus pour offrir une expérience multimédia optimale. Elles sont idéales pour naviguer sur Internet, consommer du contenu, travailler et se divertir partout, avec des systèmes d\'exploitation polyvalents et puissants.', 1735808038, '[\"1735831459_tablet-alcatel-2.png\"]', 3, 1735806765),
(613, 'Portátiles', 'La categoría de portátiles incluye computadoras portátiles diseñadas para ofrecer rendimiento, portabilidad y comodidad. Desde equipos ligeros para tareas diarias hasta laptops de alto rendimiento para profesionales y gamers, los portátiles brindan la flexibilidad de trabajar y disfrutar de entretenimiento en cualquier lugar.', 1735808038, '[\"1735831574_Lenovo-2.png\"]', 1, 1735801087),
(614, 'Laptops ', 'The laptops category includes portable computers designed to offer performance, portability, and convenience. From lightweight devices for everyday tasks to high-performance laptops for professionals and gamers, laptops provide the flexibility to work and enjoy entertainment anywhere.', 1735808038, '[\"1735831574_Lenovo-2.png\"]', 2, 1735801087),
(615, 'Portables', 'La catégorie des ordinateurs portables comprend des ordinateurs conçus pour offrir des performances, de la portabilité et de la commodité. Des appareils légers pour les tâches quotidiennes aux ordinateurs portables haute performance pour les professionnels et les joueurs, les portables offrent la flexibilité de travailler et de profiter de divertissements partout.', 1735808038, '[\"1735831574_Lenovo-2.png\"]', 3, 1735801087),
(616, 'Electrodomésticos', 'La categoría de electrodomésticos incluye una amplia variedad de dispositivos diseñados para facilitar las tareas domésticas y mejorar la calidad de vida en el hogar. Desde refrigeradores y lavadoras hasta microondas y aspiradoras, los electrodomésticos son esenciales para el funcionamiento eficiente de cualquier hogar.', 1735804773, '[\"1735831108_image1.png\"]', 1, 1735801724),
(617, 'Home Appliances', 'The home appliances category includes a wide range of devices designed to make household tasks easier and improve the quality of life at home. From refrigerators and washing machines to microwaves and vacuum cleaners, home appliances are essential for the efficient operation of any household.', 1735804773, '[\"1735831108_image1.png\"]', 2, 1735801724),
(618, 'Appareils Électroménagers', 'La catégorie des appareils électroménagers comprend une large gamme d\'appareils conçus pour faciliter les tâches ménagères et améliorer la qualité de vie à la maison. Des réfrigérateurs et lave-linges aux micro-ondes et aspirateurs, les appareils électroménagers sont essentiels pour le bon fonctionnement de tout foyer.', 1735804773, '[\"1735831108_image1.png\"]', 3, 1735801724);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `Id` int NOT NULL,
  `Id_Pais` varchar(2) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `Ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`Id`, `Id_Pais`, `Ciudad`) VALUES
(11, 'EC', 'Quito'),
(12, 'EC', 'Guayaquil'),
(13, 'EC', 'Cuenca'),
(14, 'US', 'Nueva York'),
(15, 'US', 'Los Ángeles'),
(16, 'US', 'Chicago'),
(17, 'ES', 'Madrid'),
(18, 'ES', 'Barcelona'),
(19, 'ES', 'Sevilla'),
(20, 'BR', 'Río de Janeiro'),
(21, 'BR', 'São Paulo'),
(22, 'BR', 'Brasilia'),
(23, 'AR', 'Buenos Aires'),
(24, 'AR', 'Córdoba'),
(25, 'AR', 'Rosario'),
(26, 'MX', 'Ciudad de México'),
(27, 'MX', 'Guadalajara'),
(28, 'MX', 'Monterrey'),
(29, 'DE', 'Berlín'),
(30, 'DE', 'Múnich'),
(31, 'DE', 'Hamburgo'),
(32, 'FR', 'París'),
(33, 'FR', 'Lyon'),
(34, 'FR', 'Marsella'),
(35, 'IT', 'Roma'),
(36, 'IT', 'Milán'),
(37, 'IT', 'Nápoles'),
(38, 'UK', 'Londres'),
(39, 'UK', 'Manchester'),
(40, 'UK', 'Birmingham'),
(41, 'ES', 'Madrid'),
(42, 'ES', 'Getafe'),
(43, 'ES', 'Alcalá de Henares'),
(44, 'ES', 'Barcelona'),
(45, 'ES', 'Badalona'),
(46, 'ES', 'Sabadell'),
(47, 'ES', 'Valencia'),
(48, 'ES', 'Gandía'),
(49, 'ES', 'Torrent'),
(50, 'ES', 'Sevilla'),
(51, 'ES', 'Dos Hermanas'),
(52, 'ES', 'Alcalá de Guadaíra'),
(53, 'ES', 'Zaragoza'),
(54, 'ES', 'Huesca'),
(55, 'ES', 'Teruel'),
(56, 'ES', 'Málaga'),
(57, 'ES', 'Marbella'),
(58, 'ES', 'Ronda'),
(59, 'ES', 'Murcia'),
(60, 'ES', 'Cartagena'),
(61, 'ES', 'Lorca'),
(62, 'ES', 'Burgos'),
(63, 'ES', 'Miranda de Ebro'),
(64, 'ES', 'Aranda de Duero'),
(65, 'ES', 'Valladolid'),
(66, 'ES', 'Medina del Campo'),
(67, 'ES', 'Laguna de Duero'),
(68, 'ES', 'Granada'),
(69, 'ES', 'Almuñécar'),
(70, 'ES', 'Motril'),
(71, 'VE', 'Caracas'),
(72, 'VE', 'Maracaibo'),
(73, 'VE', 'Valencia'),
(74, 'VE', 'Barquisimeto'),
(75, 'VE', 'Maracay'),
(76, 'VE', 'Ciudad Guayana'),
(77, 'VE', 'Mérida'),
(78, 'VE', 'San Cristóbal'),
(79, 'VE', 'Puerto La Cruz'),
(80, 'VE', 'Lecherías'),
(81, 'VE', 'Cumana'),
(82, 'VE', 'Punto Fijo'),
(83, 'VE', 'Cumaná'),
(84, 'VE', 'San Felipe'),
(85, 'VE', 'Trujillo'),
(86, 'VE', 'Barinas'),
(87, 'VE', 'Acarigua'),
(88, 'VE', 'Anaco'),
(89, 'VE', 'Los Teques'),
(90, 'VE', 'La Guaira');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `comentario` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `calificacion` int NOT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = Pendiente, 1 = Aprobado',
  `idioma_id` int NOT NULL DEFAULT '1',
  `parent_id` int DEFAULT NULL,
  `grupo_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuario_id`, `comentario`, `calificacion`, `fecha`, `estado`, `idioma_id`, `parent_id`, `grupo_id`) VALUES
(120, 38, 'El Samsung Galaxy J7 tiene un diseño atractivo, pero la cámara podría ser mejor.', 3, '2025-01-07 14:00:00', 1, 1, 1735806505, 1735805506),
(121, 55, 'Buen rendimiento para tareas básicas, pero la batería no dura lo suficiente.', 2, '2025-01-07 14:05:00', 1, 1, 1735806505, 1735805506),
(122, 56, 'La pantalla es excelente, pero esperaba más almacenamiento interno.', 4, '2025-01-07 14:10:00', 1, 1, 1735806505, 1735805506),
(123, 57, 'Me encanta su tamaño compacto y la calidad de construcción.', 5, '2025-01-07 14:15:00', 1, 1, 1735806505, 1735805506),
(124, 58, 'El precio es un poco alto para las características que ofrece.', 2, '2025-01-07 14:20:00', 1, 1, 1735806505, 1735805506),
(125, 59, 'Es un buen teléfono para el día a día, pero no es ideal para juegos.', 3, '2025-01-07 14:25:00', 1, 1, 1735806505, 1735805506),
(126, 60, 'La cámara toma fotos decentes en buena luz, pero no en condiciones oscuras.', 3, '2025-01-07 14:30:00', 1, 1, 1735806505, 1735805506),
(127, 61, 'Es un dispositivo confiable para quienes no necesitan especificaciones de gama alta.', 4, '2025-01-07 14:35:00', 1, 1, 1735806505, 1735805506),
(128, 62, 'Cumple con las expectativas, pero el altavoz no es lo suficientemente fuerte.', 3, '2025-01-07 14:40:00', 1, 1, 1735806505, 1735805506),
(129, 63, 'Me gusta su sistema operativo fluido, pero no hay muchas actualizaciones disponibles.', 4, '2025-01-07 14:45:00', 1, 1, 1735806505, 1735805506),
(130, 64, 'Excelente relación calidad-precio. Lo recomiendo para usuarios básicos.', 5, '2025-01-07 14:50:00', 1, 1, 1735806505, 1735805506),
(131, 65, 'El diseño es elegante, pero el plástico se siente un poco barato.', 3, '2025-01-07 14:55:00', 1, 1, 1735806505, 1735805506),
(132, 38, 'El OPPO A37f tiene una buena calidad de pantalla, pero la batería dura poco.', 3, '2025-01-07 15:00:00', 1, 1, 1735806505, 1735801466),
(133, 55, 'Es un teléfono económico con características limitadas, pero funcional.', 2, '2025-01-07 15:05:00', 1, 1, 1735806505, 1735801466),
(134, 56, 'Me sorprendió su rendimiento fluido para el precio que tiene.', 4, '2025-01-07 15:10:00', 1, 1, 1735806505, 1735801466),
(135, 57, 'El tamaño compacto lo hace muy cómodo de usar con una sola mano.', 5, '2025-01-07 15:15:00', 1, 1, 1735806505, 1735801466),
(136, 58, 'La cámara no es la mejor, pero cumple con las necesidades básicas.', 3, '2025-01-07 15:20:00', 1, 1, 1735806505, 1735801466),
(137, 59, 'Es un dispositivo confiable, pero se siente algo lento con aplicaciones pesadas.', 2, '2025-01-07 15:25:00', 1, 1, 1735806505, 1735801466),
(138, 60, 'Tiene un diseño moderno y es bastante ligero, me gusta mucho.', 4, '2025-01-07 15:30:00', 1, 1, 1735806505, 1735801466),
(139, 61, 'La pantalla responde bien al tacto, pero el brillo máximo es bajo.', 3, '2025-01-07 15:35:00', 1, 1, 1735806505, 1735801466),
(140, 62, 'El almacenamiento es limitado, pero con una microSD es suficiente.', 3, '2025-01-07 15:40:00', 1, 1, 1735806505, 1735801466),
(141, 63, 'Buena calidad de construcción, se siente resistente y duradero.', 4, '2025-01-07 15:45:00', 1, 1, 1735806505, 1735801466),
(142, 64, 'Excelente relación calidad-precio, lo recomendaría sin dudas.', 5, '2025-01-07 15:50:00', 1, 1, 1735806505, 1735801466),
(143, 65, 'Es un teléfono básico que cumple, pero esperaba un poco más por el precio.', 2, '2025-01-07 15:55:00', 1, 1, 1735806505, 1735801466),
(144, 38, 'El iPhone X tiene un diseño atractivo, pero el precio es excesivamente alto.', 3, '2025-01-07 16:00:00', 1, 1, 1735806505, 1735807954),
(145, 55, 'La batería no dura lo suficiente para un día completo de uso intensivo.', 3, '2025-01-07 16:05:00', 1, 1, 1735806505, 1735807954),
(146, 56, 'El Face ID falla en situaciones con poca luz, esperaba algo más preciso.', 2, '2025-01-07 16:10:00', 1, 1, 1735806505, 1735807954),
(147, 57, 'Aunque es un buen dispositivo, hay alternativas mucho más económicas con similares características.', 3, '2025-01-07 16:15:00', 1, 1, 1735806505, 1735807954),
(148, 58, 'La cámara es buena, pero no se nota una gran diferencia con modelos anteriores.', 2, '2025-01-07 16:20:00', 1, 1, 1735806505, 1735807954),
(149, 59, 'El teléfono es rápido, pero la falta de un conector para auriculares es decepcionante.', 5, '2025-01-07 16:25:00', 1, 1, 1735806505, 1735807954),
(150, 60, 'El brillo de la pantalla es bueno, pero el tamaño del notch resulta molesto.', 2, '2025-01-07 16:30:00', 1, 1, 1735806505, 1735807954),
(151, 61, 'El almacenamiento base es insuficiente para este precio, obliga a gastar más.', 1, '2025-01-07 16:35:00', 1, 1, 1735806505, 1735807954),
(152, 62, 'El sistema operativo es fluido, pero se siente muy restrictivo comparado con Android.', 2, '2025-01-07 16:40:00', 1, 1, 1735806505, 1735807954),
(153, 63, 'Es un teléfono bueno, pero la diferencia de precio no se justifica frente a modelos más nuevos.', 2, '2025-01-07 16:45:00', 1, 1, 1735806505, 1735807954),
(154, 64, 'Me gusta el ecosistema de Apple, pero este modelo no aporta innovaciones significativas.', 3, '2025-01-07 16:50:00', 1, 1, 1735806505, 1735807954),
(155, 65, 'El costo de reparación es ridículamente alto para cualquier daño menor.', 1, '2025-01-07 16:55:00', 1, 1, 1735806505, 1735807954),
(156, 38, 'El Infinix Hot S3 tiene una excelente relación calidad-precio. Muy satisfecho con su rendimiento.', 4, '2025-01-07 17:00:00', 1, 1, 1735806505, 1735806215),
(157, 55, 'La pantalla es sorprendentemente buena para este rango de precio. Sin embargo, la cámara podría mejorar.', 4, '2025-01-07 17:05:00', 1, 1, 1735806505, 1735806215),
(158, 56, 'Me ha sorprendido su rendimiento, especialmente considerando su precio. La batería dura todo el día sin problemas.', 4, '2025-01-07 17:10:00', 1, 1, 1735806505, 1735806215),
(159, 57, 'Buen teléfono para el uso diario, pero las fotos podrían ser mejores en condiciones de baja luz.', 4, '2025-01-07 17:15:00', 1, 1, 1735806505, 1735806215),
(160, 58, 'La batería es bastante duradera y el rendimiento es fluido, pero a veces se calienta un poco durante juegos intensivos.', 4, '2025-01-07 17:20:00', 1, 1, 1735806505, 1735806215),
(161, 59, 'Buen dispositivo, con un diseño atractivo. La cámara tiene un buen rendimiento en condiciones ideales, pero mejora en la siguiente actualización.', 4, '2025-01-07 17:25:00', 1, 1, 1735806505, 1735806215),
(162, 60, 'Es un teléfono bastante equilibrado. La pantalla es impresionante y el rendimiento general es excelente. La cámara en condiciones de luz baja puede mejorar.', 4, '2025-01-07 17:30:00', 1, 1, 1735806505, 1735806215),
(163, 61, 'El dispositivo es rápido y tiene un buen diseño, pero la cámara aún tiene margen de mejora.', 4, '2025-01-07 17:35:00', 1, 1, 1735806505, 1735806215),
(164, 62, 'El teléfono es ideal para quienes buscan un dispositivo funcional y económico. Sin embargo, el sistema operativo podría mejorar en fluidez.', 4, '2025-01-07 17:40:00', 1, 1, 1735806505, 1735806215),
(165, 63, 'Me ha impresionado la durabilidad de la batería y la pantalla. Aunque la cámara podría ser mejor, sigue siendo un gran teléfono en este rango de precio.', 4, '2025-01-07 17:45:00', 1, 1, 1735806505, 1735806215),
(166, 64, 'El rendimiento del teléfono es más que suficiente para tareas cotidianas. La cámara podría ser mejor, pero en general, muy contento con la compra.', 4, '2025-01-07 17:50:00', 1, 1, 1735806505, 1735806215),
(167, 65, 'Un excelente teléfono de gama media. La batería es impresionante y el rendimiento muy bueno. La cámara tiene algo de margen para mejorar, pero sigue siendo decente.', 4, '2025-01-07 17:55:00', 1, 1, 1735806505, 1735806215),
(168, 38, 'El Moto X4 es un excelente dispositivo. La calidad de la cámara es impresionante y el rendimiento es muy fluido.', 5, '2025-01-07 18:00:00', 1, 1, 1735806505, 1735807019),
(169, 55, 'Me encanta el diseño del Moto X4, muy elegante y con una gran pantalla. El rendimiento es increíble para tareas cotidianas y juegos.', 5, '2025-01-07 18:05:00', 1, 1, 1735806505, 1735807019),
(170, 56, 'La cámara del Moto X4 es de las mejores en su rango de precio. Las fotos son nítidas y claras, además de ser muy rápido en general.', 5, '2025-01-07 18:10:00', 1, 1, 1735806505, 1735807019),
(171, 57, 'Es un teléfono muy bien equilibrado entre precio y rendimiento. La batería dura todo el día sin problemas y la cámara es excelente.', 5, '2025-01-07 18:15:00', 1, 1, 1735806505, 1735807019),
(172, 58, 'Gran rendimiento, batería duradera y un diseño moderno. Me sorprendió mucho la velocidad de carga y lo fluido que corre todo.', 5, '2025-01-07 18:20:00', 1, 1, 1735806505, 1735807019),
(173, 59, 'Excelente opción en cuanto a calidad-precio. La cámara es fantástica y el rendimiento es perfecto para lo que necesito.', 5, '2025-01-07 18:25:00', 1, 1, 1735806505, 1735807019),
(174, 60, 'Uno de los mejores teléfonos que he tenido. La experiencia de usuario es excepcional y su cámara es de las mejores en esta gama.', 5, '2025-01-07 18:30:00', 1, 1, 1735806505, 1735807019),
(175, 61, 'Muy satisfecho con el Moto X4. La calidad de construcción es impresionante, el rendimiento en multitarea es excelente.', 5, '2025-01-07 18:35:00', 1, 1, 1735806505, 1735807019),
(176, 62, 'El Moto X4 tiene una cámara increíble, especialmente para selfies. Además, el sistema corre muy rápido, ideal para mis necesidades.', 5, '2025-01-07 18:40:00', 1, 1, 1735806505, 1735807019),
(177, 63, 'Perfecto para los que buscamos un teléfono de alta gama sin un precio exorbitante. Rápido, fluido y con una gran pantalla.', 5, '2025-01-07 18:45:00', 1, 1, 1735806505, 1735807019),
(178, 64, 'El Moto X4 me ha dejado completamente satisfecho. Batería de larga duración, rendimiento fluido y cámaras excelentes.', 5, '2025-01-07 18:50:00', 1, 1, 1735806505, 1735807019),
(179, 65, 'Uno de los mejores teléfonos que puedes encontrar en esta gama. No tengo queja alguna, todo funciona de maravilla.', 5, '2025-01-07 18:55:00', 1, 1, 1735806505, 1735807019),
(180, 38, 'El iVooMi i Series es un excelente teléfono por su precio. Funciona rápido y tiene una batería que dura todo el día sin problemas.', 5, '2025-01-07 19:00:00', 1, 1, 1735806505, 1735801974),
(181, 55, 'Muy buen rendimiento para un teléfono de gama baja. Su batería es impresionante, y la pantalla tiene una calidad decente.', 5, '2025-01-07 19:05:00', 1, 1, 1735806505, 1735801974),
(182, 56, 'El iVooMi i Series me sorprendió. Es muy fluido para tareas básicas y las fotos son decentes para el precio.', 5, '2025-01-07 19:10:00', 1, 1, 1735806505, 1735801974),
(183, 57, 'Es un teléfono bastante equilibrado, buena cámara y una pantalla suficiente para ver videos. Agradable experiencia de usuario.', 5, '2025-01-07 19:15:00', 1, 1, 1735806505, 1735801974),
(184, 58, 'El teléfono cumple su función, la batería dura mucho y no se congela al realizar varias tareas a la vez. Buen equipo por el precio.', 5, '2025-01-07 19:20:00', 1, 1, 1735806505, 1735801974),
(185, 59, 'Es un teléfono económico pero con características sorprendentes. La calidad de la cámara es aceptable y el sistema corre bien.', 5, '2025-01-07 19:25:00', 1, 1, 1735806505, 1735801974),
(186, 60, 'Excelente calidad-precio. Tiene lo que uno necesita para un uso básico y su rendimiento es muy adecuado para su gama.', 5, '2025-01-07 19:30:00', 1, 1, 1735806505, 1735801974),
(187, 61, 'Me parece una gran opción si buscas un teléfono funcional sin gastar mucho dinero. Va muy bien con las aplicaciones básicas.', 5, '2025-01-07 19:35:00', 1, 1, 1735806505, 1735801974),
(188, 62, 'Para el precio, el iVooMi i Series me parece una excelente opción. Carga rápido y no presenta problemas de rendimiento.', 5, '2025-01-07 19:40:00', 1, 1, 1735806505, 1735801974),
(189, 63, 'El teléfono es increíble para su precio. La pantalla es amplia, la batería dura mucho y las aplicaciones corren bastante bien.', 5, '2025-01-07 19:45:00', 1, 1, 1735806505, 1735801974),
(190, 64, 'El iVooMi i Series me dejó sorprendido por lo que ofrece por su precio. La cámara es decente y la experiencia de usuario es buena.', 5, '2025-01-07 19:50:00', 1, 1, 1735806505, 1735801974),
(191, 65, 'Para su precio, este teléfono hace el trabajo. La batería es excelente, la pantalla es clara y la cámara es aceptable.', 5, '2025-01-07 19:55:00', 1, 1, 1735806505, 1735801974),
(192, 38, 'La Dell Vostro Laptop es impresionante. Tiene un rendimiento excelente, la batería dura mucho y es ideal para el trabajo diario.', 5, '2025-01-07 20:00:00', 1, 1, 1735801087, 1735800802),
(193, 55, 'Es una laptop muy buena, rápida y duradera. La calidad de construcción es sólida y su pantalla es clara y nítida.', 5, '2025-01-07 20:05:00', 1, 1, 1735801087, 1735800802),
(194, 56, 'Me encanta la Dell Vostro Laptop. La velocidad es asombrosa y su capacidad de procesamiento para multitarea es increíble.', 5, '2025-01-07 20:10:00', 1, 1, 1735801087, 1735800802),
(195, 57, 'Perfecta para trabajar y estudiar. El rendimiento es rápido y la duración de la batería es excelente. Recomendada.', 5, '2025-01-07 20:15:00', 1, 1, 1735801087, 1735800802),
(196, 58, 'Muy buen rendimiento en general. Es ligera y rápida, además la batería es increíblemente duradera, ideal para viajes.', 5, '2025-01-07 20:20:00', 1, 1, 1735801087, 1735800802),
(197, 59, 'Una de las mejores laptops en su gama. La pantalla tiene colores nítidos y su rendimiento para trabajos pesados es excelente.', 5, '2025-01-07 20:25:00', 1, 1, 1735801087, 1735800802),
(198, 60, 'La Dell Vostro es todo lo que esperaba. El teclado es cómodo, la laptop es rápida y la duración de la batería es sobresaliente.', 5, '2025-01-07 20:30:00', 1, 1, 1735801087, 1735800802),
(199, 61, 'Excelente laptop para el trabajo y el entretenimiento. Rápida, ligera, y la batería me dura más de un día sin problemas.', 5, '2025-01-07 20:35:00', 1, 1, 1735801087, 1735800802),
(200, 62, 'Es perfecta para estudiantes y profesionales. La Dell Vostro tiene un rendimiento superior y es muy versátil.', 5, '2025-01-07 20:40:00', 1, 1, 1735801087, 1735800802),
(201, 63, 'La laptop es fantástica. Ofrece un gran desempeño tanto en tareas básicas como en tareas más demandantes. Muy satisfecha con la compra.', 5, '2025-01-07 20:45:00', 1, 1, 1735801087, 1735800802),
(202, 64, 'Estoy encantado con la Dell Vostro. El rendimiento es muy bueno, la batería aguanta bastante y su diseño es muy elegante.', 5, '2025-01-07 20:50:00', 1, 1, 1735801087, 1735800802),
(203, 65, 'Gran laptop, ideal para la oficina y el hogar. Su rendimiento es fluido y rápido, y la duración de la batería me sorprendió.', 5, '2025-01-07 20:55:00', 1, 1, 1735801087, 1735800802),
(204, 38, 'La Acer Laptop tiene un buen diseño y la velocidad es aceptable, pero la duración de la batería podría ser mejor.', 3, '2025-01-07 21:00:00', 1, 1, 1735801087, 1735807685),
(205, 55, 'El rendimiento de la laptop es adecuado, pero no es tan rápido como esperaba. La pantalla también podría ser mejor en resolución.', 3, '2025-01-07 21:05:00', 1, 1, 1735801087, 1735807685),
(206, 56, 'La Acer Laptop cumple con lo básico, pero no es la mejor opción si se necesita algo más potente o con mejor pantalla.', 3, '2025-01-07 21:10:00', 1, 1, 1735801087, 1735807685),
(207, 57, 'Acer tiene un buen precio, pero la laptop tiene algunas fallas en el rendimiento cuando se usan varias aplicaciones a la vez.', 3, '2025-01-07 21:15:00', 1, 1, 1735801087, 1735807685),
(208, 58, 'El rendimiento de la laptop está bien, pero la calidad de construcción no es tan robusta como esperaba. No es mala, pero podría ser mejor.', 3, '2025-01-07 21:20:00', 1, 1, 1735801087, 1735807685),
(209, 59, 'La Acer Laptop tiene buena relación calidad-precio, pero el teclado no es tan cómodo como esperaba y la batería dura menos de lo que se promete.', 3, '2025-01-07 21:25:00', 1, 1, 1735801087, 1735807685),
(210, 60, 'La laptop es aceptable, pero tiene un rendimiento limitado. Ideal para tareas sencillas, pero no para multitarea o juegos.', 3, '2025-01-07 21:30:00', 1, 1, 1735801087, 1735807685),
(211, 61, 'Es una laptop básica, pero cumple su función para tareas sencillas. La pantalla podría ser más brillante y la calidad del sonido mejor.', 3, '2025-01-07 21:35:00', 1, 1, 1735801087, 1735807685),
(212, 62, 'Es una laptop funcional, pero el rendimiento no es tan rápido cuando abro varias aplicaciones. No la recomendaría para trabajos exigentes.', 3, '2025-01-07 21:40:00', 1, 1, 1735801087, 1735807685),
(213, 63, 'Está bien para el uso diario, pero la pantalla no tiene la mejor resolución. Es una laptop decente pero no destacada.', 3, '2025-01-07 21:45:00', 1, 1, 1735801087, 1735807685),
(214, 64, 'El rendimiento es aceptable, pero la laptop podría tener una mayor duración de la batería. Es un producto razonable para el precio que tiene.', 3, '2025-01-07 21:50:00', 1, 1, 1735801087, 1735807685),
(215, 65, 'Cumple con lo que se espera, pero no es la opción más rápida o con la mejor calidad de pantalla. Buen rendimiento para tareas básicas.', 3, '2025-01-07 21:55:00', 1, 1, 1735801087, 1735807685),
(216, 38, 'La Lenovo Laptop tiene una mala calidad de pantalla y la velocidad es muy lenta. No la recomendaría para tareas exigentes.', 2, '2025-01-07 22:00:00', 1, 1, 1735801087, 1735805306),
(217, 55, 'La laptop tiene un rendimiento aceptable al principio, pero después de un tiempo empieza a volverse muy lenta. No tiene la mejor calidad de construcción.', 2, '2025-01-07 22:05:00', 1, 1, 1735801087, 1735805306),
(218, 56, 'El teclado es incómodo y la pantalla tiene colores apagados. Además, se calienta rápidamente, lo que no la hace adecuada para tareas largas.', 2, '2025-01-07 22:10:00', 1, 1, 1735801087, 1735805306),
(219, 57, 'Es una laptop básica, pero el rendimiento deja mucho que desear. No la recomendaría para trabajo pesado o para multitarea.', 2, '2025-01-07 22:15:00', 1, 1, 1735801087, 1735805306),
(220, 58, 'Aunque el precio es bajo, la Lenovo Laptop no tiene la mejor calidad. La batería no dura mucho y se vuelve lenta con el tiempo.', 2, '2025-01-07 22:20:00', 1, 1, 1735801087, 1735805306),
(221, 59, 'El rendimiento es muy bajo para lo que necesito. La laptop no es rápida y la calidad de pantalla es mala. No la recomendaría para nada.', 2, '2025-01-07 22:25:00', 1, 1, 1735801087, 1735805306),
(222, 60, 'La Lenovo Laptop tiene muchos fallos, como la lentitud al abrir programas y una pantalla de mala calidad. No cumple con las expectativas.', 2, '2025-01-07 22:30:00', 1, 1, 1735801087, 1735805306),
(223, 61, 'La duración de la batería es muy mala y la laptop tiene un rendimiento muy bajo, por lo que no es recomendable para tareas exigentes.', 2, '2025-01-07 22:35:00', 1, 1, 1735801087, 1735805306),
(224, 62, 'El diseño es básico y la laptop no tiene el rendimiento que se necesita para trabajar con múltiples programas. Muy decepcionado.', 2, '2025-01-07 22:40:00', 1, 1, 1735801087, 1735805306),
(225, 63, 'No vale la pena el precio. La Lenovo Laptop no tiene un buen rendimiento ni una buena pantalla. Se calienta mucho y se vuelve lenta rápidamente.', 2, '2025-01-07 22:45:00', 1, 1, 1735801087, 1735805306),
(226, 64, 'La laptop es muy lenta y no tiene una gran calidad de construcción. La pantalla tiene poca resolución, lo que hace la experiencia de uso incómoda.', 2, '2025-01-07 22:50:00', 1, 1, 1735801087, 1735805306),
(227, 65, 'Definitivamente no la compraría otra vez. El rendimiento es malo y la pantalla no tiene buenos colores. Mejor buscar otra opción.', 2, '2025-01-07 22:55:00', 1, 1, 1735801087, 1735805306),
(228, 38, 'La Lenovo Laptop es increíble, tiene un rendimiento excelente para trabajar y jugar. La calidad de la pantalla y el diseño son muy buenos.', 5, '2025-01-07 22:00:00', 1, 1, 1735806765, 1735804136),
(229, 55, 'Me encanta mi Lenovo Laptop. La velocidad es rápida y la batería dura mucho tiempo. Ideal para mis estudios y trabajo diario.', 5, '2025-01-07 22:05:00', 1, 1, 1735806765, 1735804136),
(230, 56, 'La laptop es muy rápida, con buena calidad de pantalla. Ideal para el trabajo y entretenimiento. Muy recomendable.', 5, '2025-01-07 22:10:00', 1, 1, 1735806765, 1735804136),
(231, 57, 'Es una laptop con un excelente rendimiento. No se calienta, la pantalla es clara y la batería dura todo el día. Totalmente satisfecha.', 5, '2025-01-07 22:15:00', 1, 1, 1735806765, 1735804136),
(232, 58, 'Perfecta para mis necesidades. La Lenovo Laptop tiene un diseño atractivo y un rendimiento excepcional, todo funcionando de maravilla.', 5, '2025-01-07 22:20:00', 1, 1, 1735806765, 1735804136),
(233, 59, 'No tengo quejas, la Lenovo Laptop funciona de manera excelente. La velocidad, la calidad de la pantalla y la duración de la batería son de lo mejor.', 5, '2025-01-07 22:25:00', 1, 1, 1735806765, 1735804136),
(234, 60, 'Estoy muy satisfecho con esta laptop. Es rápida, tiene una gran pantalla y la batería dura varias horas sin problemas. La mejor opción que he encontrado.', 5, '2025-01-07 22:30:00', 1, 1, 1735806765, 1735804136),
(235, 61, 'Excelente rendimiento, sobre todo para multitareas. El teclado es cómodo y la pantalla tiene buena resolución. La recomiendo al 100%.', 5, '2025-01-07 22:35:00', 1, 1, 1735806765, 1735804136),
(236, 62, 'La laptop ha sido una compra excelente. La velocidad es rápida y la calidad de la pantalla es brillante. Ideal para trabajo o entretenimiento.', 5, '2025-01-07 22:40:00', 1, 1, 1735806765, 1735804136),
(237, 63, 'Muy buena laptop, la velocidad es impresionante y la calidad de la pantalla es nítida. Ha superado todas mis expectativas.', 5, '2025-01-07 22:45:00', 1, 1, 1735806765, 1735804136),
(238, 64, 'Una laptop fantástica. Tiene todo lo que necesito, un excelente rendimiento, gran pantalla y diseño atractivo. Estoy muy feliz con mi compra.', 5, '2025-01-07 22:50:00', 1, 1, 1735806765, 1735804136),
(239, 65, 'Esta es la mejor laptop que he tenido. La velocidad es impresionante, la batería es duradera y la pantalla es muy clara. La recomendaría sin duda.', 5, '2025-01-07 22:55:00', 1, 1, 1735806765, 1735804136),
(240, 38, 'El Sony 80 cm es excelente. La calidad de la imagen es impresionante, el sonido es claro y potente. Perfecto para cualquier espacio.', 5, '2025-01-07 23:00:00', 1, 1, 1735804773, 1735800547),
(241, 55, 'Muy satisfecho con la compra. La pantalla tiene una resolución increíble, y es ideal para mi sala. El diseño también es muy elegante.', 5, '2025-01-07 23:05:00', 1, 1, 1735804773, 1735800547),
(242, 56, 'Este televisor tiene una excelente calidad de imagen y sonido. Lo uso para ver mis series y películas favoritas, y nunca me decepciona.', 5, '2025-01-07 23:10:00', 1, 1, 1735804773, 1735800547),
(243, 57, 'El Sony 80 cm es perfecto para el salón. La resolución de la pantalla es excelente y el sonido es mucho mejor que otros televisores de esta gama.', 5, '2025-01-07 23:15:00', 1, 1, 1735804773, 1735800547),
(244, 58, 'Muy buena calidad de imagen, el tamaño de la pantalla es perfecto para mi casa. Además, el sonido es claro y fuerte. Lo recomiendo totalmente.', 5, '2025-01-07 23:20:00', 1, 1, 1735804773, 1735800547),
(245, 59, 'La calidad de la imagen es impresionante, y el sonido es muy bueno. Estoy muy contento con la compra, es ideal para ver deportes y películas en casa.', 5, '2025-01-07 23:25:00', 1, 1, 1735804773, 1735800547),
(246, 60, 'Este televisor ha superado mis expectativas. La pantalla es muy nítida, y el sonido es de alta calidad. Lo disfruto mucho para ver contenido en alta definición.', 5, '2025-01-07 23:30:00', 1, 1, 1735804773, 1735800547),
(247, 61, 'Muy buena opción si estás buscando un televisor de calidad. El tamaño es perfecto, la resolución es impresionante y el sonido es muy claro.', 5, '2025-01-07 23:35:00', 1, 1, 1735804773, 1735800547),
(248, 62, 'Excelente televisor, la calidad de imagen y sonido es excelente para su tamaño. Perfecto para disfrutar de tus series y películas favoritas.', 5, '2025-01-07 23:40:00', 1, 1, 1735804773, 1735800547),
(249, 63, 'Excelente televisor, no solo tiene una buena calidad de imagen, sino también un sonido increíble. Ideal para quienes buscan algo de buena relación calidad-precio.', 5, '2025-01-07 23:45:00', 1, 1, 1735804773, 1735800547),
(250, 64, 'Lo mejor de este televisor es su calidad de imagen. La pantalla es grande, nítida, y el sonido también es excelente. Estoy muy satisfecho con mi compra.', 5, '2025-01-07 23:50:00', 1, 1, 1735804773, 1735800547),
(251, 65, 'Muy buen televisor, ideal para ver películas y jugar videojuegos. La calidad de la imagen es increíble y el sonido también es bastante bueno.', 5, '2025-01-07 23:55:00', 1, 1, 1735804773, 1735800547),
(252, 38, 'Excelente calidad de imagen, la resolución es impresionante para su tamaño. Además, el sonido es perfecto para su tamaño. Lo recomiendo mucho.', 5, '2025-01-07 23:00:00', 1, 1, 1735804773, 1735804735),
(253, 55, 'El mejor televisor que he tenido. La imagen es nítida y clara, y el sonido es increíble. Perfecto para ver películas y deportes.', 5, '2025-01-07 23:05:00', 1, 1, 1735804773, 1735804735),
(254, 56, 'Muy buena compra, el televisor tiene una calidad de imagen impresionante y el sonido es bastante bueno. Es ideal para mi sala de estar.', 5, '2025-01-07 23:10:00', 1, 1, 1735804773, 1735804735),
(255, 57, 'Estoy muy contento con la compra. El tamaño es perfecto para mi habitación, la calidad de la imagen es excelente y el sonido es nítido.', 5, '2025-01-07 23:15:00', 1, 1, 1735804773, 1735804735),
(256, 58, 'Este televisor es perfecto. La calidad de imagen es espectacular, el sonido es claro y el diseño es moderno. Muy satisfecho con mi compra.', 5, '2025-01-07 23:20:00', 1, 1, 1735804773, 1735804735),
(257, 59, 'Muy buena calidad de imagen y sonido. Estoy encantado con mi compra, lo uso para ver mis series favoritas y es una experiencia genial.', 5, '2025-01-07 23:25:00', 1, 1, 1735804773, 1735804735),
(258, 60, 'La calidad de imagen de este televisor es increíble, la resolución es muy buena para su tamaño y el sonido es perfecto para ver películas.', 5, '2025-01-07 23:30:00', 1, 1, 1735804773, 1735804735),
(259, 61, 'Me encanta este televisor. La calidad de imagen es impresionante, el tamaño es perfecto y el sonido es claro y fuerte. Es una excelente opción.', 5, '2025-01-07 23:35:00', 1, 1, 1735804773, 1735804735),
(260, 62, 'Excelente televisor, la calidad de imagen es muy buena y el sonido es de alta calidad. Perfecto para ver películas y jugar videojuegos.', 5, '2025-01-07 23:40:00', 1, 1, 1735804773, 1735804735),
(261, 63, 'Excelente televisor, el sonido es claro y la imagen tiene una resolución increíble. Me ha encantado, y es perfecto para cualquier espacio.', 5, '2025-01-07 23:45:00', 1, 1, 1735804773, 1735804735),
(262, 64, 'Muy buena relación calidad-precio. La pantalla es de alta definición, y el sonido es fuerte y claro. Estoy muy feliz con mi compra.', 5, '2025-01-07 23:50:00', 1, 1, 1735804773, 1735804735),
(263, 65, 'Estoy muy satisfecho con mi compra, la calidad de imagen es excelente, el sonido es nítido y su diseño es moderno. Lo recomiendo al 100%.', 5, '2025-01-07 23:55:00', 1, 1, 1735804773, 1735804735),
(264, 38, 'Los altavoces son buenos en general, pero la calidad del sonido podría ser mejor. El volumen es aceptable, pero no es tan potente como esperaba.', 3, '2025-01-07 23:00:00', 1, 1, 1735804773, 1735806984),
(265, 55, 'La calidad de sonido es decente, pero los bajos no son tan profundos como otros altavoces que he probado. Aun así, cumplen su función.', 3, '2025-01-07 23:05:00', 1, 1, 1735804773, 1735806984),
(266, 56, 'El sonido es aceptable, pero no es impresionante. Los altavoces cumplen con lo que prometen, aunque podrían mejorar en calidad de audio.', 3, '2025-01-07 23:10:00', 1, 1, 1735804773, 1735806984),
(267, 57, 'Los altavoces están bien para un uso básico, pero la calidad del sonido podría mejorar. Los bajos no son tan nítidos como esperaba.', 3, '2025-01-07 23:15:00', 1, 1, 1735804773, 1735806984),
(268, 58, 'Son altavoces decentes, pero esperaba un mejor rendimiento. El sonido es claro, pero no tiene mucha potencia. Funciona bien para escuchar música tranquila.', 3, '2025-01-07 23:20:00', 1, 1, 1735804773, 1735806984),
(269, 59, 'La calidad de sonido es media, no es tan impresionante como esperaba. El diseño es bonito, pero el sonido podría ser más potente.', 3, '2025-01-07 23:25:00', 1, 1, 1735804773, 1735806984),
(270, 60, 'El rendimiento es promedio. El sonido no es tan fuerte como me hubiera gustado, pero está bien para un uso normal.', 3, '2025-01-07 23:30:00', 1, 1, 1735804773, 1735806984),
(271, 61, 'El audio es aceptable, pero no tiene la misma calidad que otros modelos. La potencia es buena, pero los graves podrían ser más profundos.', 3, '2025-01-07 23:35:00', 1, 1, 1735804773, 1735806984),
(272, 62, 'Son altavoces bastante básicos. La calidad de sonido es aceptable, pero no es sobresaliente. Podría mejorar en cuanto a potencia y calidad de graves.', 3, '2025-01-07 23:40:00', 1, 1, 1735804773, 1735806984),
(273, 63, 'La calidad de sonido es decente, pero esperaba algo más potente. Es suficiente para un uso diario, pero no esperes un sonido impresionante.', 3, '2025-01-07 23:45:00', 1, 1, 1735804773, 1735806984),
(274, 64, 'Son altavoces buenos para el precio. La calidad de sonido es media y la potencia no es tan alta, pero cumplen con lo que ofrecen.', 3, '2025-01-07 23:50:00', 1, 1, 1735804773, 1735806984),
(275, 65, 'El sonido es bueno para el precio, pero no es sobresaliente. La potencia es suficiente para habitaciones pequeñas, pero no tiene mucha fuerza en habitaciones grandes.', 3, '2025-01-07 23:55:00', 1, 1, 1735804773, 1735806984),
(276, 38, 'No estoy muy satisfecho con estos auriculares. El sonido es bajo y los bajos no son profundos. Definitivamente no son lo que esperaba.', 2, '2025-01-07 23:00:00', 1, 1, 1735804773, 1735803214),
(277, 55, 'La calidad del sonido no es tan buena como me esperaba. Los graves son casi inexistentes y el volumen no es lo suficientemente alto.', 2, '2025-01-07 23:05:00', 1, 1, 1735804773, 1735803214),
(278, 56, 'No me impresionaron. La calidad de sonido es decente, pero los auriculares se sienten frágiles y el sonido es muy plano.', 2, '2025-01-07 23:10:00', 1, 1, 1735804773, 1735803214),
(279, 57, 'Los auriculares tienen un sonido mediocre y la conexión a veces se pierde. No son tan cómodos como esperaba, y no los recomendaría para uso prolongado.', 2, '2025-01-07 23:15:00', 1, 1, 1735804773, 1735803214),
(280, 58, 'Desafortunadamente, no cumplen con mis expectativas. El sonido es débil y los bajos no son satisfactorios. No son tan cómodos de usar tampoco.', 2, '2025-01-07 23:20:00', 1, 1, 1735804773, 1735803214),
(281, 59, 'El rendimiento de estos auriculares es regular. La calidad de sonido deja mucho que desear, especialmente en comparación con otros modelos más baratos.', 2, '2025-01-07 23:25:00', 1, 1, 1735804773, 1735803214),
(282, 60, 'Los auriculares son decentes, pero no son lo mejor en calidad de sonido. El sonido es bastante plano y el diseño no es tan cómodo.', 2, '2025-01-07 23:30:00', 1, 1, 1735804773, 1735803214),
(283, 61, 'No estoy contento con mi compra. La calidad de sonido es mediocre y los auriculares son incómodos para largos períodos de uso.', 2, '2025-01-07 23:35:00', 1, 1, 1735804773, 1735803214),
(284, 62, 'Para el precio, esperaba algo mejor. El sonido es bajo y los auriculares no se ajustan bien. No los recomendaría.', 2, '2025-01-07 23:40:00', 1, 1, 1735804773, 1735803214),
(285, 63, 'El sonido es flojo y los bajos son muy débiles. Aunque son asequibles, no cumplen con mis expectativas en términos de calidad de audio.', 2, '2025-01-07 23:45:00', 1, 1, 1735804773, 1735803214),
(286, 64, 'El rendimiento es pobre. Los bajos son casi inexistentes y el sonido en general es muy flojo. No me convencieron para nada.', 2, '2025-01-07 23:50:00', 1, 1, 1735804773, 1735803214),
(287, 65, 'No ofrecen una buena experiencia auditiva. El sonido es bajo y la comodidad es cuestionable. No valen lo que cuestan.', 2, '2025-01-07 23:55:00', 1, 1, 1735804773, 1735803214),
(288, 38, 'El sonido es impresionante y los graves son bastante buenos. Aunque podría ser más claro en frecuencias altas, en general es un gran producto.', 4, '2025-01-07 23:00:00', 1, 1, 1735804773, 1735802622),
(289, 55, 'Me gustó mucho la calidad del sonido, especialmente los bajos. Solo le falta un poco de nitidez en los agudos, pero por lo demás es excelente.', 4, '2025-01-07 23:05:00', 1, 1, 1735804773, 1735802622),
(290, 56, 'Suena muy bien para su tamaño. Los bajos son profundos y potentes, pero el rendimiento de los agudos podría mejorarse un poco.', 4, '2025-01-07 23:10:00', 1, 1, 1735804773, 1735802622),
(291, 57, 'Este altavoz tiene un gran sonido, aunque a veces siento que los agudos son un poco demasiado brillantes. Aún así, muy buen rendimiento general.', 4, '2025-01-07 23:15:00', 1, 1, 1735804773, 1735802622),
(292, 58, 'La calidad de sonido es buena, pero no perfecta. Los graves son potentes y claros, pero los agudos podrían ser más nítidos.', 4, '2025-01-07 23:20:00', 1, 1, 1735804773, 1735802622),
(293, 59, 'Estoy bastante satisfecho con la calidad de sonido, especialmente los bajos. Aunque a veces me gustaría que los agudos tuvieran más claridad.', 4, '2025-01-07 23:25:00', 1, 1, 1735804773, 1735802622),
(294, 60, 'El altavoz ofrece un sonido sólido, pero el nivel de detalle en los agudos podría mejorarse. Por lo demás, es un buen producto.', 4, '2025-01-07 23:30:00', 1, 1, 1735804773, 1735802622),
(295, 61, 'Muy buen altavoz. Los bajos son impresionantes, aunque en las frecuencias más altas podría haber más definición. En general, muy buena compra.', 4, '2025-01-07 23:35:00', 1, 1, 1735804773, 1735802622),
(296, 62, 'Suena muy bien para el tamaño del dispositivo. Los graves son potentes, pero me gustaría que los agudos fueran un poco más claros y precisos.', 4, '2025-01-07 23:40:00', 1, 1, 1735804773, 1735802622),
(297, 63, 'Es un altavoz con buen sonido, pero a veces siento que el sonido podría ser más equilibrado. Los bajos son fuertes, pero los agudos no siempre son claros.', 4, '2025-01-07 23:45:00', 1, 1, 1735804773, 1735802622),
(298, 64, 'El LG Boom Blast tiene un sonido impresionante, aunque los agudos a veces parecen un poco estridentes. Aún así, es un altavoz muy bueno en general.', 4, '2025-01-07 23:50:00', 1, 1, 1735804773, 1735802622),
(299, 65, 'La calidad de sonido es excelente en los graves, pero los agudos podrían ser un poco más nítidos. En términos generales, una excelente opción en su categoría.', 4, '2025-01-07 23:55:00', 1, 1, 1735804773, 1735802622),
(300, 38, 'La calidad de la cámara es pésima. No logra enfocar bien y las fotos siempre salen borrosas. No la recomiendo en absoluto.', 1, '2025-01-07 23:00:00', 1, 1, 1735804773, 1735809463),
(301, 55, 'El rendimiento es muy bajo. La calidad de imagen es horrible, no vale para nada lo que pagué por ella. Muy decepcionado.', 1, '2025-01-07 23:05:00', 1, 1, 1735804773, 1735809463),
(302, 56, 'No recomiendo esta cámara. La imagen no tiene definición y los colores se ven deslavados. No cumple para nada con lo que esperaba.', 1, '2025-01-07 23:10:00', 1, 1, 1735804773, 1735809463),
(303, 57, 'La peor compra que he hecho. La cámara se siente barata y no tiene una buena calidad de foto ni video. Absolutamente no la volvería a comprar.', 1, '2025-01-07 23:15:00', 1, 1, 1735804773, 1735809463),
(304, 58, 'Totalmente decepcionado. No tiene enfoque automático y la calidad de las fotos es terrible, incluso con buena luz. No la recomiendo para nada.', 1, '2025-01-07 23:20:00', 1, 1, 1735804773, 1735809463),
(305, 59, 'Muy mala calidad de imagen. El enfoque es muy lento y no captura bien los detalles. Es una cámara de mala calidad, no la compren.', 1, '2025-01-07 23:25:00', 1, 1, 1735804773, 1735809463),
(306, 60, 'La calidad de las fotos no es buena, los colores se ven opacos y no se ve nítido ni cuando se usa en condiciones ideales de luz.', 1, '2025-01-07 23:30:00', 1, 1, 1735804773, 1735809463),
(307, 61, 'Muy mala cámara. Los detalles son borrosos, el enfoque no funciona bien y no es capaz de capturar la imagen de manera precisa.', 1, '2025-01-07 23:35:00', 1, 1, 1735804773, 1735809463),
(308, 62, 'No vale para nada. Las fotos son de mala calidad, no tiene un buen rendimiento ni siquiera en condiciones de buena iluminación.', 1, '2025-01-07 23:40:00', 1, 1, 1735804773, 1735809463),
(309, 63, 'Una gran decepción. La cámara es lenta y la calidad de las imágenes no es buena, incluso con buena iluminación no logra capturar bien los detalles.', 1, '2025-01-07 23:45:00', 1, 1, 1735804773, 1735809463),
(310, 64, 'La cámara no cumple ni con lo básico. La resolución es muy baja y los colores no son reales. En resumen, no vale la pena en absoluto.', 1, '2025-01-07 23:50:00', 1, 1, 1735804773, 1735809463),
(311, 65, 'No recomiendo para nada esta cámara. No captura buenos detalles, el enfoque es pésimo y la calidad de imagen no es aceptable para ningún tipo de uso.', 1, '2025-01-07 23:55:00', 1, 1, 1735804773, 1735809463),
(312, 39, '¡Increíble kit de destornilladores! He usado varios sets de precisión, pero este realmente destaca por su calidad. Las puntas magnéticas hacen que sea mucho más fácil trabajar con tornillos pequeños, y el estuche mantiene todo perfectamente organizado. Lo recomiendo totalmente para reparaciones electrónicas y gadgets', 5, '2025-01-15 01:33:47', 1, 1, 0, 1736901979),
(313, 39, 'Este kit es perfecto para mis proyectos de reparación. Es compacto, completo y las herramientas son de muy buena calidad. Nunca me ha faltado una punta para lo que necesito. Además, el diseño ergonómico hace que el manejo sea mucho más cómodo. Excelente relación calidad-precio.', 5, '2025-01-15 01:33:58', 1, 1, 0, 1736901979);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `creado_en` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `grupo_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `usuario_id`, `creado_en`, `grupo_id`) VALUES
(432, 39, '2025-01-15 10:02:10', 1735800547);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id` int NOT NULL,
  `codigo` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id`, `codigo`, `nombre`) VALUES
(1, 'es', 'Español'),
(2, 'en', 'Inglés'),
(3, 'fr', 'Francés');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea_pedidos`
--

CREATE TABLE `linea_pedidos` (
  `id` int NOT NULL,
  `pedido_id` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `oferta` decimal(5,2) DEFAULT '0.00',
  `subtotal` decimal(10,2) DEFAULT '0.00',
  `stock` int DEFAULT NULL,
  `idioma_id` int DEFAULT NULL,
  `grupo_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `usuario_id` int NOT NULL DEFAULT '0',
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `linea_pedidos`
--

INSERT INTO `linea_pedidos` (`id`, `pedido_id`, `cantidad`, `precio`, `oferta`, `subtotal`, `stock`, `idioma_id`, `grupo_id`, `usuario_id`, `nombre`) VALUES
(583, NULL, 1, 999.99, 20.00, 799.99, 13, 2, '1735807954', 39, 'Apple iPhone X');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `Id` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pais` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`Id`, `Pais`) VALUES
('AR', 'Argentina'),
('BR', 'Brasil'),
('DE', 'Alemania'),
('EC', 'Ecuador'),
('ES', 'España'),
('FR', 'Francia'),
('IT', 'Italia'),
('MX', 'México'),
('UK', 'Reino Unido'),
('US', 'Estados Unidos'),
('VE', 'Venezuela');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int NOT NULL,
  `usuario_id` int DEFAULT NULL,
  `pais` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `codigoPostal` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `coste` float(200,2) DEFAULT NULL,
  `estado` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `idioma_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `usuario_id`, `pais`, `ciudad`, `direccion`, `codigoPostal`, `coste`, `estado`, `fecha`, `hora`, `idioma_id`) VALUES
(295, 39, 'ES', 'Madrid', 'malaga', '29009', 0.00, 'Pagado', '2025-06-03', '01:02:14', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` int NOT NULL,
  `role_id` int NOT NULL,
  `permission` enum('read','write','super') COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `role_id`, `permission`) VALUES
(1, 1, 'read'),
(2, 2, 'write'),
(3, 3, 'super');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `estado` enum('available','out_of_stock','discontinued') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `oferta` decimal(10,2) DEFAULT NULL,
  `offer_expiration` date DEFAULT NULL,
  `imagenes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `parent_id` int DEFAULT NULL,
  `idioma_id` int NOT NULL DEFAULT '1',
  `grupo_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `offer_start` date DEFAULT NULL,
  `especificacion_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `especificacion_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `especificacion_3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `especificacion_4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `especificacion_5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `estado`, `oferta`, `offer_expiration`, `imagenes`, `parent_id`, `idioma_id`, `grupo_id`, `offer_start`, `especificacion_1`, `especificacion_2`, `especificacion_3`, `especificacion_4`, `especificacion_5`) VALUES
(333, 'Samsung Galaxy J7', 'El Samsung Galaxy J7 es un smartphone con una pantalla grande de 5.5 pulgadas, ideal para ver contenido multimedia y navegar de forma cómoda. Equipado con una cámara de 13 MP para capturar fotos nítidas y una batería de larga duración, es perfecto para aquellos que buscan un teléfono confiable y accesible.', 350.00, 5, 'available', 0.00, NULL, '[\"1735824549_SamsungGalaxyJ7-1.jpg\",\"1735824549_SamsungGalaxyJ7-2.jpg\",\"1735824549_SamsungGalaxyJ7-3.jpg\"]', 1735806505, 1, '1735805506', NULL, '3 GB RAM | 16 GB ROM | Expandible hasta 256 GB', 'Pantalla Full HD de 5.5 pulgadas', 'Cámara trasera de 13 MP | Cámara frontal de 8 MP', 'Batería de 3300 mAh', 'Procesador Exynos 7870 Octa Core 1.6GHz'),
(334, 'Samsung Galaxy J7', 'The Samsung Galaxy J7 is a smartphone with a large 5.5-inch screen, perfect for comfortably watching multimedia content and browsing. Equipped with a 13 MP camera for capturing sharp photos and a long-lasting battery, it’s ideal for those seeking a reliable and affordable phone.', 350.00, 10, 'available', 30.00, NULL, '[\"1735824549_SamsungGalaxyJ7-1.jpg\",\"1735824549_SamsungGalaxyJ7-2.jpg\",\"1735824549_SamsungGalaxyJ7-3.jpg\"]', 1735806505, 2, '1735805506', NULL, '3 GB RAM | 16 GB ROM | Expandable up to 256 GB', '5.5-inch Full HD Display', '13MP Rear Camera | 8MP Front Camera', '3300 mAh Battery', 'Exynos 7870 Octa Core 1.6GHz Processor'),
(335, 'Samsung Galaxy J7', 'Le Samsung Galaxy J7 est un smartphone avec un grand écran de 5,5 pouces, idéal pour regarder du contenu multimédia et naviguer confortablement. Équipé d\'une caméra de 13 MP pour capturer des photos nettes et d\'une batterie longue durée, il est parfait pour ceux qui recherchent un téléphone fiable et abordable.', 350.00, 10, 'available', 30.00, NULL, '[\"1735824549_SamsungGalaxyJ7-1.jpg\",\"1735824549_SamsungGalaxyJ7-2.jpg\",\"1735824549_SamsungGalaxyJ7-3.jpg\"]', 1735806505, 3, '1735805506', NULL, '3 Go de RAM | 16 Go de ROM | Extensible jusqu\'à 256 Go', 'Écran Full HD de 5,5 pouces', 'Appareil photo arrière 13 MP | Appareil photo avant 8 MP', 'Batterie de 3300 mAh', 'Processeur Exynos 7870 Octa Core 1,6 GHz'),
(339, 'Apple iPhone X', 'El Apple iPhone X es un smartphone premium con una pantalla OLED de 5.8 pulgadas que ofrece colores vibrantes y detalles impresionantes. Con su innovador sistema de reconocimiento facial, cámara de 12 MP y un rendimiento excepcional gracias al chip A11 Bionic, el iPhone X es ideal para quienes buscan un dispositivo elegante y potente.', 999.99, 0, 'available', 20.00, NULL, '[\"1735815622_iphonex-1.png\",\"1735815622_iphonex-2.png\"]', 1735806505, 1, '1735807954', NULL, 'Pantalla Super Retina HD de 5.8 pulgadas', 'Procesador A11 Bionic con Neural Engine', 'Cámara trasera de 12 MP (dual) | Cámara frontal de 7 MP', 'Face ID (Reconocimiento facial avanzado)', 'Batería de 2716 mAh (carga rápida y carga inalámbrica)'),
(340, 'Apple iPhone X', 'The Apple iPhone X is a premium smartphone with a 5.8-inch OLED display that delivers vibrant colors and stunning detail. With its innovative facial recognition system, 12 MP camera, and exceptional performance thanks to the A11 Bionic chip, the iPhone X is perfect for those seeking an elegant and powerful device.', 999.99, 13, 'available', 20.00, NULL, '[\"1735824745_iphonex-1.png\",\"1735824745_iphonex-2.png\"]', 1735806505, 2, '1735807954', NULL, 'Pantalla Super Retina HD de 5.8 pulgadas', 'Procesador A11 Bionic con Neural Engine', 'Cámara trasera de 12 MP (dual) | Cámara frontal de 7 MP', 'Face ID (Reconocimiento facial avanzado)', 'Batería de 2716 mAh (carga rápida y carga inalámbrica)'),
(341, 'Apple iPhone X', 'L\'Apple iPhone X est un smartphone premium avec un écran OLED de 5,8 pouces offrant des couleurs vives et des détails impressionnants. Avec son système innovant de reconnaissance faciale, son appareil photo de 12 MP et des performances exceptionnelles grâce à la puce A11 Bionic, l\'iPhone X est parfait pour ceux qui recherchent un appareil élégant et puissant.', 999.99, 13, 'available', 20.00, NULL, '[\"1735824745_iphonex-1.png\",\"1735824745_iphonex-2.png\"]', 1735806505, 3, '1735807954', NULL, 'Pantalla Super Retina HD de 5.8 pulgadas', 'Procesador A11 Bionic con Neural Engine', 'Cámara trasera de 12 MP (dual) | Cámara frontal de 7 MP', 'Face ID (Reconocimiento facial avanzado)', 'Batería de 2716 mAh (carga rápida y carga inalámbrica)'),
(342, 'Infinix Hot S3', 'El Infinix Hot S3 es un smartphone asequible con una pantalla de 5.65 pulgadas, ideal para quienes buscan un dispositivo con buena calidad de imagen y un rendimiento fluido. Equipado con una cámara de 13 MP y una batería de 4000 mAh, ofrece una experiencia satisfactoria para el uso diario.', 149.99, 7, 'available', 0.00, NULL, '[\"1735815641_InfinixHotS3-1.png\",\"1735815641_InfinixHotS3-2.png\"]', 1735806505, 1, '1735806215', NULL, 'Pantalla HD+ de 5.65 pulgadas', 'Procesador Qualcomm Snapdragon 430', 'Cámara trasera de 13 MP | Cámara frontal de 20 MP', 'Batería de 4000 mAh', '3 GB de RAM | 32 GB de almacenamiento interno (expandible hasta 128 GB)'),
(343, 'Infinix Hot S3', 'The Infinix Hot S3 is an affordable smartphone with a 5.65-inch display, perfect for those looking for a device with good image quality and smooth performance. Equipped with a 13 MP camera and a 4000 mAh battery, it offers a satisfying experience for daily use.', 149.99, 10, 'available', 0.00, NULL, '[\"1735815641_InfinixHotS3-1.png\",\"1735815641_InfinixHotS3-2.png\"]', 1735806505, 2, '1735806215', NULL, 'Pantalla HD+ de 5.65 pulgadas', 'Procesador Qualcomm Snapdragon 430', 'Cámara trasera de 13 MP | Cámara frontal de 20 MP', 'Batería de 4000 mAh', '3 GB de RAM | 32 GB de almacenamiento interno (expandible hasta 128 GB)'),
(344, 'Infinix Hot S3', 'L\'Infinix Hot S3 est un smartphone abordable avec un écran de 5,65 pouces, idéal pour ceux qui recherchent un appareil avec une bonne qualité d\'image et des performances fluides. Équipé d\'un appareil photo de 13 MP et d\'une batterie de 4000 mAh, il offre une expérience satisfaisante pour une utilisation quotidienne.', 149.99, 10, 'available', 0.00, NULL, '[\"1735815641_InfinixHotS3-1.png\",\"1735815641_InfinixHotS3-2.png\"]', 1735806505, 3, '1735806215', NULL, 'Pantalla HD+ de 5.65 pulgadas', 'Procesador Qualcomm Snapdragon 430', 'Cámara trasera de 13 MP | Cámara frontal de 20 MP', 'Batería de 4000 mAh', '3 GB de RAM | 32 GB de almacenamiento interno (expandible hasta 128 GB)'),
(345, 'Moto X4 (6 GB)', 'El Moto X4 con 6 GB de RAM es un smartphone de alto rendimiento, ideal para quienes buscan velocidad y capacidad multitarea. Con una pantalla de 5.2 pulgadas, procesador Snapdragon 630 y cámaras de 12 MP y 16 MP, es perfecto para capturar fotos nítidas y disfrutar de un rendimiento fluido en todas tus aplicaciones y juegos.', 349.99, 13, 'available', 0.00, NULL, '[\"1735815730_motorolax4-1.png\",\"1735815730_motorolax4-2.png\"]', 1735806505, 1, '1735807019', NULL, 'Pantalla Full HD de 5.2 pulgadas', 'Procesador Qualcomm Snapdragon 630', 'Cámara trasera de 12 MP | Cámara frontal de 16 MP', 'Batería de 3000 mAh con carga rápida TurboPower', '6 GB de RAM | 64 GB de almacenamiento interno (expandible hasta 2 TB)'),
(346, 'Moto X4 (6 GB)', 'The Moto X4 with 6 GB of RAM is a high-performance smartphone, perfect for those seeking speed and multitasking capabilities. With a 5.2-inch display, Snapdragon 630 processor, and 12 MP and 16 MP cameras, it’s ideal for capturing sharp photos and enjoying smooth performance across apps and games.', 349.99, 13, 'available', 0.00, NULL, '[\"1735815730_motorolax4-1.png\",\"1735815730_motorolax4-2.png\"]', 1735806505, 2, '1735807019', NULL, 'Pantalla Full HD de 5.2 pulgadas', 'Procesador Qualcomm Snapdragon 630', 'Cámara trasera de 12 MP | Cámara frontal de 16 MP', 'Batería de 3000 mAh con carga rápida TurboPower', '6 GB de RAM | 64 GB de almacenamiento interno (expandible hasta 2 TB)'),
(347, 'Moto X4 (6 GB)', 'Le Moto X4 avec 6 Go de RAM est un smartphone haute performance, idéal pour ceux qui recherchent de la vitesse et des capacités multitâches. Avec un écran de 5,2 pouces, un processeur Snapdragon 630 et des caméras de 12 MP et 16 MP, il est parfait pour capturer des photos nettes et profiter de performances fluides dans toutes vos applications et jeux.', 349.99, 13, 'available', 0.00, NULL, '[\"1735815730_motorolax4-1.png\",\"1735815730_motorolax4-2.png\"]', 1735806505, 3, '1735807019', NULL, 'Pantalla Full HD de 5.2 pulgadas', 'Procesador Qualcomm Snapdragon 630', 'Cámara trasera de 12 MP | Cámara frontal de 16 MP', 'Batería de 3000 mAh con carga rápida TurboPower', '6 GB de RAM | 64 GB de almacenamiento interno (expandible hasta 2 TB)'),
(348, 'iVooMi i Series', 'La iVooMi i Series es una gama de smartphones accesibles con un diseño elegante y un rendimiento confiable. Equipado con pantallas de 5 pulgadas, cámaras de 8 MP y 13 MP, y baterías de larga duración, es perfecto para aquellos que buscan un dispositivo básico pero funcional para uso diario.', 99.99, 4, 'available', 0.00, NULL, '[\"1736903341_nubia_2.png\",\"1736903341_nubia_3.png\"]', 1735806505, 1, '1735801974', NULL, 'Pantalla de 5.0 pulgadas HD', 'Procesador MediaTek Quad-Core', 'Cámara trasera de 8 MP | Cámara frontal de 5 MP', 'Batería de 3000 mAh', '2 GB de RAM | 16 GB de almacenamiento'),
(349, 'iVooMi i Series', 'The iVooMi i Series is a range of affordable smartphones with a sleek design and reliable performance. Equipped with 5-inch displays, 8 MP and 13 MP cameras, and long-lasting batteries, it’s perfect for those looking for a basic but functional device for everyday use.', 99.99, 4, 'available', 0.00, NULL, '[\"1736903353_nubia_2.png\",\"1736903353_nubia_3.png\"]', 1735806505, 2, '1735801974', NULL, 'Pantalla de 5.0 pulgadas HD', 'Procesador MediaTek Quad-Core', 'Cámara trasera de 8 MP | Cámara frontal de 5 MP', 'Batería de 3000 mAh', '2 GB de RAM | 16 GB de almacenamiento'),
(350, 'iVooMi i Series', 'La iVooMi i Series est une gamme de smartphones abordables avec un design élégant et des performances fiables. Équipé d\'écrans de 5 pouces, de caméras de 8 MP et 13 MP, et de batteries longue durée, il est parfait pour ceux qui recherchent un appareil basique mais fonctionnel pour un usage quotidien.', 99.99, 4, 'available', 0.00, NULL, '[\"1736903370_nubia_2.png\",\"1736903370_nubia_3.png\"]', 1735806505, 3, '1735801974', NULL, 'Pantalla de 5.0 pulgadas HD', 'Procesador MediaTek Quad-Core', 'Cámara trasera de 8 MP | Cámara frontal de 5 MP', 'Batería de 3000 mAh', '2 GB de RAM | 16 GB de almacenamiento'),
(351, 'Alcatel Tablet', 'La Alcatel Tablet es un dispositivo portátil con una pantalla de 8 pulgadas, ideal para quienes buscan una experiencia de navegación y entretenimiento fluida. Con su sistema operativo Android, procesador eficiente y batería de larga duración, es perfecta para el trabajo, la educación y el entretenimiento en cualquier lugar.', 129.99, 150, 'available', 0.00, NULL, '[\"1735828099_tablet-alcatel-1.png\",\"1735828099_tablet-alcatel-2.png\"]', 1735806765, 1, '1735804136', NULL, 'Pantalla de 8.0 pulgadas Full HD', 'Procesador MediaTek Quad-Core', 'Cámara trasera de 5 MP | Cámara frontal de 2 MP', 'Batería de 4000 mAh', '2 GB de RAM | 16 GB de almacenamiento'),
(352, 'Alcatel Tablet', 'The Alcatel Tablet is a portable device with an 8-inch display, perfect for those looking for a smooth browsing and entertainment experience. With its Android operating system, efficient processor, and long-lasting battery, it’s ideal for work, education, and entertainment anywhere.', 129.99, 150, 'available', 0.00, NULL, '[\"1735828099_tablet-alcatel-1.png\",\"1735828099_tablet-alcatel-2.png\"]', 1735806765, 2, '1735804136', NULL, 'Pantalla de 8.0 pulgadas Full HD', 'Procesador MediaTek Quad-Core', 'Cámara trasera de 5 MP | Cámara frontal de 2 MP', 'Batería de 4000 mAh', '2 GB de RAM | 16 GB de almacenamiento'),
(353, 'Alcatel Tablet', 'La tablette Alcatel est un appareil portable avec un écran de 8 pouces, idéal pour ceux qui recherchent une expérience de navigation et de divertissement fluide. Avec son système d\'exploitation Android, son processeur efficace et sa batterie longue durée, elle est parfaite pour le travail, l\'éducation et le divertissement partout', 129.99, 150, 'available', 0.00, NULL, '[\"1735828099_tablet-alcatel-1.png\",\"1735828099_tablet-alcatel-2.png\"]', 1735806765, 3, '1735804136', NULL, 'Pantalla de 8.0 pulgadas Full HD', 'Procesador MediaTek Quad-Core', 'Cámara trasera de 5 MP | Cámara frontal de 2 MP', 'Batería de 4000 mAh', '2 GB de RAM | 16 GB de almacenamiento'),
(354, 'Dell Vostro Laptop', 'La Dell Vostro Laptop es una computadora portátil diseñada para profesionales que requieren rendimiento y fiabilidad. Con un procesador Intel Core i5, 8 GB de RAM y una pantalla de 15.6 pulgadas, es ideal para realizar múltiples tareas, trabajar con aplicaciones exigentes y mantenerte productivo durante todo el día. Su diseño elegante y batería de larga duración la hacen perfecta para trabajar en cualquier lugar.', 649.99, 7, 'available', 0.00, NULL, '[\"1735824898_DELLVOSTRO-1.png\",\"1735824898_DELLVOSTRO-2.png\"]', 1735801087, 1, '1735800802', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i5', '8 GB de RAM | 256 GB SSD', 'Gráficos Intel UHD 620', 'Batería de 42 Wh'),
(355, 'Dell Vostro Laptop', 'The Dell Vostro Laptop is a portable computer designed for professionals who require performance and reliability. With an Intel Core i5 processor, 8 GB of RAM, and a 15.6-inch display, it\'s ideal for multitasking, running demanding applications, and staying productive all day long. Its sleek design and long-lasting battery make it perfect for working anywhere.', 649.99, 7, 'available', 0.00, NULL, '[\"1735825045_DELLVOSTRO-1.png\",\"1735825045_DELLVOSTRO-2.png\"]', 1735801087, 2, '1735800802', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i5', '8 GB de RAM | 256 GB SSD', 'Gráficos Intel UHD 620', 'Batería de 42 Wh'),
(356, 'Dell Vostro Laptop', 'Le Dell Vostro Laptop est un ordinateur portable conçu pour les professionnels qui nécessitent des performances et de la fiabilité. Avec un processeur Intel Core i5, 8 Go de RAM et un écran de 15,6 pouces, il est idéal pour le multitâche, l\'exécution d\'applications exigeantes et pour rester productif toute la journée. Son design élégant et sa batterie longue durée en font un choix parfait pour travailler partout.', 649.99, 7, 'available', 0.00, NULL, '[\"1735825045_DELLVOSTRO-1.png\",\"1735825045_DELLVOSTRO-2.png\"]', 1735801087, 3, '1735800802', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i5', '8 GB de RAM | 256 GB SSD', 'Gráficos Intel UHD 620', 'Batería de 42 Wh'),
(357, 'Acer Laptop', 'La Acer Laptop es una computadora portátil de alto rendimiento diseñada para adaptarse a tus necesidades diarias y profesionales. Con un procesador Intel Core i7, 16 GB de RAM y una pantalla de 14 pulgadas Full HD, ofrece una experiencia fluida para trabajar, estudiar o disfrutar de contenido multimedia. Su diseño delgado y batería de larga duración la hacen perfecta para aquellos que buscan productividad y portabilidad en un solo dispositivo.', 799.99, 7, 'available', 0.00, NULL, '[\"1735824934_acer-2.png\",\"1735824934_acer-3.png\",\"1735824934_acer-1.png\"]', 1735801087, 1, '1735807685', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i7', '16 GB de RAM | 512 GB SSD', 'Gráficos NVIDIA GeForce GTX 1650', 'Batería de 56 Wh'),
(358, 'Acer Laptop', 'The Acer Laptop is a high-performance portable computer designed to meet your daily and professional needs. With an Intel Core i7 processor, 16 GB of RAM, and a 14-inch Full HD display, it provides a smooth experience for working, studying, or enjoying multimedia content. Its slim design and long-lasting battery make it perfect for those looking for productivity and portability in one device.', 799.99, 13, 'available', 0.00, NULL, '[\"1735825012_acer-1.png\",\"1735825012_acer-2.png\",\"1735825012_acer-3.png\"]', 1735801087, 2, '1735807685', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i7', '16 GB de RAM | 512 GB SSD', 'Gráficos NVIDIA GeForce GTX 1650', 'Batería de 56 Wh'),
(359, 'Ordinateur Portable Acer', 'L\'ordinateur portable Acer est un appareil haute performance conçu pour répondre à vos besoins quotidiens et professionnels. Avec un processeur Intel Core i7, 16 Go de RAM et un écran Full HD de 14 pouces, il offre une expérience fluide pour travailler, étudier ou profiter de contenus multimédia. Son design mince et sa batterie longue durée en font un choix parfait pour ceux qui recherchent productivité et portabilité dans un seul appareil.', 799.99, 13, 'available', 0.00, NULL, '[\"1735825012_acer-1.png\",\"1735825012_acer-2.png\",\"1735825012_acer-3.png\"]', 1735801087, 3, '1735807685', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i7', '16 GB de RAM | 512 GB SSD', 'Gráficos NVIDIA GeForce GTX 1650', 'Batería de 56 Wh'),
(360, 'Lenovo Laptop', 'La Lenovo Laptop es una opción confiable y de alto rendimiento para quienes buscan un equilibrio entre productividad y entretenimiento. Equipado con un procesador Intel Core i5, 8 GB de RAM y una pantalla de 15.6 pulgadas, este dispositivo es ideal para tareas multitarea, navegar por internet y ver películas. Su diseño elegante, combinado con una batería de larga duración, la convierte en una excelente opción para usuarios que necesitan versatilidad en su día a día.', 549.99, 0, 'available', 0.00, NULL, '[\"1735824952_Lenovo-1.png\",\"1735824952_Lenovo-2.png\",\"1735824952_Lenovo-3.png\"]', 1735801087, 1, '1735805306', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i5', '8 GB de RAM | 1 TB HDD', 'Gráficos Intel UHD 620', 'Batería de 45 Wh'),
(361, 'Lenovo Laptop', 'The Lenovo Laptop is a reliable, high-performance option for those looking for a balance between productivity and entertainment. Equipped with an Intel Core i5 processor, 8 GB of RAM, and a 15.6-inch display, this device is perfect for multitasking, browsing the web, and watching movies. Its sleek design, combined with a long-lasting battery, makes it an excellent choice for users who need versatility in their daily activities.', 549.99, 13, 'available', 0.00, NULL, '[\"1735824981_Lenovo-1.png\",\"1735824981_Lenovo-2.png\",\"1735824981_Lenovo-3.png\"]', 1735801087, 2, '1735805306', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i5', '8 GB de RAM | 1 TB HDD', 'Gráficos Intel UHD 620', 'Batería de 45 Wh'),
(362, 'Lenovo Laptop', 'L\'ordinateur portable Lenovo est une option fiable et haute performance pour ceux qui recherchent un équilibre entre productivité et divertissement. Équipé d\'un processeur Intel Core i5, 8 Go de RAM et un écran de 15,6 pouces, cet appareil est parfait pour le multitâche, la navigation sur Internet et la visualisation de films. Son design élégant, combiné à une batterie longue durée, en fait un excellent choix pour les utilisateurs qui ont besoin de polyvalence dans leurs activités quotidiennes.', 549.99, 13, 'available', 0.00, NULL, '[\"1735824981_Lenovo-1.png\",\"1735824981_Lenovo-2.png\",\"1735824981_Lenovo-3.png\"]', 1735801087, 3, '1735805306', NULL, 'Pantalla de 15.6 pulgadas Full HD', 'Procesador Intel Core i5', '8 GB de RAM | 1 TB HDD', 'Gráficos Intel UHD 620', 'Batería de 45 Wh'),
(366, 'Artis Speaker', 'Sonido estéreo envolvente, controles simples y flexibles, diseño industrial refinado, integración de servicios de música y Alexa, feedback visual de la información, presets programables, sincronización multiroom', 69.99, 0, 'available', 0.00, NULL, '[\"1735826733_speaker-1.png\",\"1735826733_speaker-2.png\"]', 1735804773, 1, '1735804735', NULL, 'Sonido estéreo envolvente', 'Controles simples y flexibles', 'Conectividad Bluetooth 4.2', 'Batería de 10 horas de duración', 'Diseño compacto y portátil'),
(367, 'Artis Speaker', 'Immersive stereo sound, simple and flexible controls, refined industrial design, integration of music services and Alexa, visual feedback of information, programmable presets, multi-room synchronization', 69.99, 5, 'available', 0.00, NULL, '[\"1735826733_speaker-1.png\",\"1735826733_speaker-2.png\"]', 1735804773, 2, '1735804735', NULL, 'Sonido estéreo envolvente', 'Controles simples y flexibles', 'Conectividad Bluetooth 4.2', 'Batería de 10 horas de duración', 'Diseño compacto y portátil'),
(368, 'Artis Speaker', 'Son stéréo immersif, commandes simples et flexibles, design industriel raffiné, intégration de musique et de services Alexa, retour d\'informations visuelles, préréglages programmables, synchronisation multi-pièces', 69.99, 5, 'available', 0.00, NULL, '[\"1735826733_speaker-1.png\",\"1735826733_speaker-2.png\"]', 1735804773, 3, '1735804735', NULL, 'Sonido estéreo envolvente', 'Controles simples y flexibles', 'Conectividad Bluetooth 4.2', 'Batería de 10 horas de duración', 'Diseño compacto y portátil'),
(369, 'Philips Speakers', 'Los Philips Speakers son altavoces de alta calidad diseñados para ofrecer un sonido claro y potente. Con conectividad Bluetooth y un diseño elegante, estos altavoces son perfectos para disfrutar de música en cualquier lugar. Su batería de larga duración y su fácil transporte hacen de ellos una opción ideal para quienes buscan un dispositivo portátil para escuchar música, podcasts o hacer llamadas.', 89.99, 5, 'available', 0.00, NULL, '[\"1735827315_philipsspeakers-1.png\",\"1735827315_philipsspeakers-2.png\"]', 1735804773, 1, '1735806984', NULL, 'High-quality stereo sound', 'Bluetooth 4.2 connectivity', '12 hours of battery life', 'Waterproof (IPX5)', 'Portable and sleek design'),
(370, 'Philips Speakers', 'Philips Speakers are high-quality speakers designed to deliver clear and powerful sound. With Bluetooth connectivity and a sleek design, these speakers are perfect for enjoying music anywhere. Their long-lasting battery and easy portability make them an ideal choice for those looking for a portable device to listen to music, podcasts, or make calls.', 89.99, 6, 'available', 0.00, NULL, '[\"1735827315_philipsspeakers-1.png\",\"1735827315_philipsspeakers-2.png\"]', 1735804773, 2, '1735806984', NULL, 'High-quality stereo sound', 'Bluetooth 4.2 connectivity', '12 hours of battery life', 'Waterproof (IPX5)', 'Portable and sleek design'),
(371, 'Philips Speakers', 'Les enceintes Philips sont des haut-parleurs de haute qualité conçus pour offrir un son clair et puissant. Avec la connectivité Bluetooth et un design élégant, ces enceintes sont parfaites pour écouter de la musique partout. Leur batterie longue durée et leur facilité de transport en font un choix idéal pour ceux qui recherchent un appareil portable pour écouter de la musique, des podcasts ou passer des appels.', 89.99, 6, 'available', 0.00, NULL, '[\"1735827315_philipsspeakers-1.png\",\"1735827315_philipsspeakers-2.png\"]', 1735804773, 3, '1735806984', NULL, 'High-quality stereo sound', 'Bluetooth 4.2 connectivity', '12 hours of battery life', 'Waterproof (IPX5)', 'Portable and sleek design'),
(372, 'boAt Rockerz Headset', 'Los boAt Rockerz Headset son unos auriculares inalámbricos de alta calidad, diseñados para ofrecer una experiencia de sonido inmersiva. Con tecnología Bluetooth, su sonido nítido y potente es ideal para escuchar música, hacer llamadas o disfrutar de tus podcasts favoritos. Su diseño ergonómico y cómodo, junto con una batería de larga duración, los convierte en la opción perfecta para quienes buscan un headset de alto rendimiento.', 59.99, 5, 'available', 0.00, NULL, '[\"1736941814_audifonos_1.png\",\"1736941814_audifonos_2.png\"]', 1735804773, 1, '1735803214', NULL, 'High-quality wireless headphones', 'Bluetooth 5.0 technology', '20 hours of battery life', 'Noise-canceling microphone', 'Comfortable over-ear design'),
(373, 'boAt Rockerz Headset', 'The boAt Rockerz Headset is a high-quality wireless headset designed to deliver an immersive sound experience. With Bluetooth technology, its clear and powerful sound is perfect for listening to music, making calls, or enjoying your favorite podcasts. Its ergonomic and comfortable design, along with long-lasting battery life, makes it the perfect choice for those looking for a high-performance headset.', 59.99, 5, 'available', 0.00, NULL, '[\"1736941814_audifonos_1.png\",\"1736941814_audifonos_2.png\"]', 1735804773, 2, '1735803214', NULL, 'High-quality wireless headphones', 'Bluetooth 5.0 technology', '20 hours of battery life', 'Noise-canceling microphone', 'Comfortable over-ear design'),
(374, 'boAt Rockerz Headset', 'Le casque boAt Rockerz est un casque sans fil de haute qualité, conçu pour offrir une expérience sonore immersive. Grâce à la technologie Bluetooth, son son clair et puissant est parfait pour écouter de la musique, passer des appels ou profiter de vos podcasts préférés. Son design ergonomique et confortable, ainsi que sa batterie longue durée, en font le choix idéal pour ceux qui recherchent un casque haute performance.', 59.99, 5, 'available', 0.00, NULL, '[\"1736941814_audifonos_1.png\",\"1736941814_audifonos_2.png\"]', 1735804773, 3, '1735803214', NULL, 'High-quality wireless headphones', 'Bluetooth 5.0 technology', '20 hours of battery life', 'Noise-canceling microphone', 'Comfortable over-ear design'),
(375, 'LG Boom Blast Speaker', 'El LG Boom Blast Speaker es un altavoz portátil de gran potencia diseñado para ofrecer un sonido envolvente y de alta calidad. Con conectividad Bluetooth, es ideal para llevar la fiesta a cualquier lugar, proporcionando un sonido nítido y unos graves profundos. Su diseño compacto, resistente al agua y su batería de larga duración lo hacen perfecto para usar al aire libre o en cualquier momento de entretenimiento.', 129.99, 90, 'available', 0.00, NULL, '[\"1735828403_m6.jpg\"]', 1735804773, 1, '1735802622', NULL, 'High-powered portable speaker with deep bass', 'Bluetooth 5.0 connectivity', '30 hours of battery life', 'IPX7 water resistance', '360° surround sound'),
(376, 'LG Boom Blast Speaker', 'The LG Boom Blast Speaker is a high-powered portable speaker designed to deliver immersive, high-quality sound. With Bluetooth connectivity, it is perfect for bringing the party anywhere, providing clear sound and deep bass. Its compact, water-resistant design and long-lasting battery make it ideal for outdoor use or any entertainment occasion.', 129.99, 90, 'available', 0.00, NULL, '[\"1735828403_m6.jpg\"]', 1735804773, 2, '1735802622', NULL, 'High-powered portable speaker with deep bass', 'Bluetooth 5.0 connectivity', '30 hours of battery life', 'IPX7 water resistance', '360° surround sound'),
(377, 'Enceinte LG Boom Blast', 'L\'enceinte LG Boom Blast est un haut-parleur portable de haute puissance conçu pour offrir un son immersif et de haute qualité. Grâce à la connectivité Bluetooth, il est parfait pour emmener la fête partout, offrant un son clair et des basses profondes. Son design compact, résistant à l\'eau et sa batterie longue durée en font un choix idéal pour une utilisation en extérieur ou pour toute occasion de divertissement.', 129.99, 90, 'available', 0.00, NULL, '[\"1735828403_m6.jpg\"]', 1735804773, 3, '1735802622', NULL, 'High-powered portable speaker with deep bass', 'Bluetooth 5.0 connectivity', '30 hours of battery life', 'IPX7 water resistance', '360° surround sound'),
(378, 'Cámara Nikon', 'La cámara Nikon es un dispositivo de alta gama, ideal para fotógrafos profesionales y aficionados. Con un sensor de imagen avanzado y una excelente capacidad de enfoque automático, te permite capturar fotos de calidad excepcional incluso en condiciones de poca luz. Su diseño ergonómico y su facilidad de uso la hacen perfecta tanto para principiantes como para expertos en fotografía. Viene con una lente intercambiable y una batería de larga duración.', 499.99, 10, 'available', 0.00, NULL, '[\"1735828445_mm3.jpg\"]', 1735804773, 1, '1735809463', NULL, 'High-resolution 24.2 MP sensor', '4K UHD video recording', 'ISO range of 100-51,200', 'Advanced autofocus system', 'Dual memory card slots'),
(379, 'Nikon Camera', 'The Nikon Camera is a high-end device, perfect for professional photographers and enthusiasts. With an advanced image sensor and excellent autofocus capability, it allows you to capture exceptional photos even in low-light conditions. Its ergonomic design and ease of use make it ideal for both beginners and expert photographers. It comes with an interchangeable lens and long-lasting battery.', 499.99, 10, 'available', 0.00, NULL, '[\"1735828445_mm3.jpg\"]', 1735804773, 2, '1735809463', NULL, 'High-resolution 24.2 MP sensor', '4K UHD video recording', 'ISO range of 100-51,200', 'Advanced autofocus system', 'Dual memory card slots'),
(380, 'Appareil Photo Nikon', 'L\'appareil photo Nikon est un dispositif haut de gamme, idéal pour les photographes professionnels et les amateurs. Avec un capteur d\'image avancé et une excellente capacité de mise au point automatique, il vous permet de capturer des photos de qualité exceptionnelle même en faible luminosité. Son design ergonomique et sa facilité d\'utilisation en font un choix parfait pour les débutants et les experts en photographie. Il est livré avec un objectif interchangeable et une batterie longue durée.', 499.99, 10, 'available', 0.00, NULL, '[\"1735828445_mm3.jpg\"]', 1735804773, 3, '1735809463', NULL, 'High-resolution 24.2 MP sensor', '4K UHD video recording', 'ISO range of 100-51,200', 'Advanced autofocus system', 'Dual memory card slots'),
(381, 'Plancha Seca', 'La plancha seca Dry Iron es una herramienta eficiente para alisar y quitar arrugas de tu ropa. Con un diseño ligero y fácil de usar, ofrece un calentamiento rápido y una distribución uniforme del calor, asegurando resultados perfectos en todo tipo de tejidos. Ideal para quienes buscan una opción económica y funcional para mantener su ropa siempre impecable.', 29.99, 12, 'available', 0.00, NULL, '[\"1735829180_14.png\",\"1735829180_plancha-2.png\"]', 1735804773, 1, '1735808134', NULL, 'Non-stick soleplate for smooth ironing', 'Quick heat-up time for faster use', 'Lightweight and easy to handle', 'Ergonomic design for comfortable ironing', 'Automatic shut-off for safety'),
(382, 'Dry Iron', 'The Dry Iron is an efficient tool for smoothing and removing wrinkles from your clothes. With a lightweight and easy-to-use design, it offers quick heating and even heat distribution, ensuring perfect results on all types of fabrics. Ideal for those seeking an affordable and functional option to keep their clothes looking pristine.', 29.99, 12, 'available', 0.00, NULL, '[\"1735829180_plancha-1.png\",\"1735829180_plancha-2.png\"]', 1735804773, 2, '1735808134', NULL, 'Non-stick soleplate for smooth ironing', 'Quick heat-up time for faster use', 'Lightweight and easy to handle', 'Ergonomic design for comfortable ironing', 'Automatic shut-off for safety'),
(383, 'Fer à Repasser Sec', 'Le fer à repasser sec Dry Iron est un outil efficace pour lisser et éliminer les rides de vos vêtements. Avec un design léger et facile à utiliser, il offre un chauffage rapide et une distribution uniforme de la chaleur, garantissant des résultats parfaits sur tous les types de tissus. Idéal pour ceux qui recherchent une option économique et fonctionnelle pour garder leurs vêtements impeccables.', 29.99, 12, 'available', 0.00, NULL, '[\"1735829180_plancha-1.png\",\"1735829180_plancha-2.png\"]', 1735804773, 3, '1735808134', NULL, 'Non-stick soleplate for smooth ironing', 'Quick heat-up time for faster use', 'Lightweight and easy to handle', 'Ergonomic design for comfortable ironing', 'Automatic shut-off for safety'),
(384, 'Plancha de Pelo', 'La plancha de pelo Hair Straightener es perfecta para alisar tu cabello de manera rápida y eficaz. Con placas de cerámica que garantizan un deslizamiento suave y sin dañar el cabello, este dispositivo asegura resultados duraderos y un acabado brillante. Ideal para todo tipo de cabello, su diseño ergonómico y temperatura regulable permiten un uso cómodo y adaptado a tus necesidades.', 39.99, 4, 'available', 0.00, NULL, '[\"1735828569_mm5.jpg\"]', 1735804773, 1, '1735806472', NULL, 'Ceramic plates for smooth, shiny hair', 'Fast heat-up time with adjustable temperature', 'Lightweight design for easy handling', 'Automatic shut-off feature for safety', 'Ideal for all hair types'),
(385, 'Plancha de Pelo', 'The Hair Straightener is perfect for quickly and efficiently straightening your hair. With ceramic plates that ensure smooth gliding without damaging your hair, this device guarantees long-lasting results and a shiny finish. Ideal for all hair types, its ergonomic design and adjustable temperature provide comfortable and tailored use.', 39.99, 4, 'available', 0.00, NULL, '[\"1735828569_mm5.jpg\"]', 1735804773, 2, '1735806472', NULL, 'Ceramic plates for smooth, shiny hair', 'Fast heat-up time with adjustable temperature', 'Lightweight design for easy handling', 'Automatic shut-off feature for safety', 'Ideal for all hair types'),
(386, 'Plancha de Pelo', 'Le lisseur de cheveux Hair Straightener est parfait pour lisser vos cheveux rapidement et efficacement. Avec des plaques en céramique qui assurent un glissement doux sans abîmer les cheveux, cet appareil garantit des résultats durables et une finition brillante. Idéal pour tous les types de cheveux, son design ergonomique et sa température réglable permettent une utilisation confortable et adaptée à vos besoins.', 39.99, 4, 'available', 0.00, NULL, '[\"1735828569_mm5.jpg\"]', 1735804773, 3, '1735806472', NULL, 'Ceramic plates for smooth, shiny hair', 'Fast heat-up time with adjustable temperature', 'Lightweight design for easy handling', 'Automatic shut-off feature for safety', 'Ideal for all hair types'),
(421, ' OPPO A37f', 'El OPPO A37f es un smartphone con diseño moderno y compacto, ideal para usuarios que buscan rendimiento y estilo. Cuenta con una pantalla HD de 5 pulgadas, procesador quad-core para un rendimiento fluido, y una cámara principal de 8 MP que captura imágenes claras incluso en condiciones de poca luz. Su batería de 2630 mAh asegura que puedas disfrutarlo durante todo el día. ¡Perfecto para quienes valoran la calidad al mejor precio!', 199.99, 6, 'available', 0.00, NULL, '[\"1736902290_OPPO_1.png\",\"1736902290_OPPO_2.png\",\"1736902290_OPPO_3.png\"]', 1735806505, 1, '1736340350', NULL, '5.0-inch HD display for crisp visuals', '13 MP rear camera for high-quality photos', '3GB RAM and 16GB internal storage', 'Qualcomm Snapdragon processor for fast performance', 'Long-lasting battery with quick charge technology'),
(422, ' OPPO A37f', 'The OPPO A37f is a smartphone with a sleek and compact design, perfect for users who value performance and style. It features a 5-inch HD display, a quad-core processor for smooth operation, and an 8 MP main camera that captures clear images even in low light. Its 2630 mAh battery ensures you can use it all day long. Perfect for those who appreciate quality at the best price!', 199.99, 6, 'available', 0.00, NULL, '[\"1736902290_OPPO_1.png\",\"1736902290_OPPO_2.png\",\"1736902290_OPPO_3.png\"]', 1735806505, 2, '1736340350', NULL, '5.0-inch HD display for crisp visuals', '13 MP rear camera for high-quality photos', '3GB RAM and 16GB internal storage', 'Qualcomm Snapdragon processor for fast performance', 'Long-lasting battery with quick charge technology'),
(423, ' OPPO A37f', 'L’OPPO A37f est un smartphone au design élégant et compact, parfait pour les utilisateurs recherchant performance et style. Il dispose d’un écran HD de 5 pouces, d’un processeur quad-core pour un fonctionnement fluide et d’un appareil photo principal de 8 MP qui capture des images nettes même en faible luminosité. Sa batterie de 2630 mAh garantit une utilisation tout au long de la journée. Idéal pour ceux qui apprécient la qualité au meilleur prix !', 199.99, 6, 'available', 0.00, NULL, '[\"1736902290_OPPO_1.png\",\"1736902290_OPPO_2.png\",\"1736902290_OPPO_3.png\"]', 1735806505, 3, '1736340350', NULL, '5.0-inch HD display for crisp visuals', '13 MP rear camera for high-quality photos', '3GB RAM and 16GB internal storage', 'Qualcomm Snapdragon processor for fast performance', 'Long-lasting battery with quick charge technology'),
(442, 'JOREST 38Pcs Destornilladores Precision Kit', 'El kit de destornilladores de precisión JOREST de 38 piezas es la solución definitiva para tus necesidades de reparación y mantenimiento. Diseñado para trabajos de alta precisión, este completo set incluye puntas magnéticas y herramientas de calidad premium para dispositivos electrónicos, relojes, gafas, teléfonos móviles, consolas de videojuegos y más. Compacto y portátil, este kit es ideal tanto para profesionales como para aficionados al bricolaje.', 29.99, 10, 'available', 0.00, NULL, '[\"1736904564_electronica_1-removebg-preview.png\",\"1736904564_Screenshot_2-removebg-preview.png\"]', 1735808038, 1, '1736901979', NULL, 'Incluye 38 herramientas de precisión con puntas magnéticas.', 'Material resistente y duradero, fabricado con acero inoxidable de alta calidad.', 'Diseño ergonómico para un agarre cómodo y fácil manipulación.', 'Estuche compacto y organizado para transporte y almacenamiento sencillo.', 'Compatible con múltiples dispositivos electrónicos y productos delicados.'),
(443, 'JOREST 38Pcs Precision Screwdriver Kit', 'The JOREST 38-piece Precision Screwdriver Kit is the ultimate solution for your repair and maintenance needs. Designed for high-precision tasks, this comprehensive set includes magnetic tips and premium-quality tools, perfect for electronic devices, watches, glasses, mobile phones, gaming consoles, and more. Compact and portable, this kit is ideal for both professionals and DIY enthusiasts.', 29.99, 10, 'available', 0.00, NULL, '[\"1736904746_electronica_1-removebg-preview.png\",\"1736904746_Screenshot_2-removebg-preview.png\"]', 1735808038, 2, '1736901979', NULL, 'Includes 38 precision tools with magnetic tips.', 'Durable and resistant material made with high-quality stainless steel.', 'Ergonomic design for comfortable grip and easy handling', 'Compact and organized case for easy transport and storage.', 'Compatible with a variety of electronic devices and delicate products.'),
(444, 'JOREST 38Pcs Kit de Tournevis de Précision', 'Le kit de tournevis de précision JOREST de 38 pièces est la solution idéale pour vos besoins de réparation et d\'entretien. Conçu pour des travaux de haute précision, cet ensemble complet comprend des embouts magnétiques et des outils de qualité supérieure, parfaits pour les appareils électroniques, les montres, les lunettes, les téléphones portables, les consoles de jeux et bien plus encore. Compact et portable, ce kit est idéal pour les professionnels comme pour les amateurs de bricolage.', 29.99, 10, 'available', 0.00, NULL, '[\"1736904746_electronica_1-removebg-preview.png\",\"1736904746_Screenshot_2-removebg-preview.png\"]', 1735808038, 3, '1736901979', NULL, 'Comprend 38 outils de précision avec embouts magnétiques.', 'Matériau résistant et durable, fabriqué en acier inoxydable de haute qualité.', 'Design ergonomique pour une prise en main confortable et une manipulation facile.', 'Étui compact et organisé pour un transport et un rangement pratiques.', 'Compatible avec une variété d\'appareils électroniques et de produits délicats.'),
(448, 'Multifuncional Cortador de Verdura Espiralizador', 'El cortador multifuncional espiralizador es una herramienta de cocina perfecta para cortar y esparcir verduras en formas espirales. Ideal para hacer ensaladas, guarniciones, y platos saludables. Cuenta con 3 tipos de cuchillas intercambiables para crear espirales finos, gruesos y en tiras.', 29.99, 10, 'available', 0.00, NULL, '[\"1736941026_cortador_1.png\",\"1736941026_cortador_2.png\"]', 1735801724, 1, '1736945215', NULL, 'Hecho de acero inoxidable de alta calidad.', '3 cuchillas intercambiables: fina, gruesa y en tiras.', 'Mango ergonómico antideslizante para un uso cómodo y seguro.', 'Fácil de limpiar, apto para lavavajillas.', 'Tamaño compacto, ideal para almacenar en espacios pequeños.'),
(449, 'Multifunctional Vegetable Spiralizer Cutter', 'The multifunctional spiralizer cutter is a kitchen tool perfect for cutting and spiraling vegetables. Ideal for making salads, side dishes, and healthy meals. It features 3 interchangeable blades to create fine, thick spirals, and strips.', 29.99, 10, 'available', 0.00, NULL, '[\"1736941026_cortador_1.png\",\"1736941026_cortador_2.png\"]', 1735801724, 2, '1736945215', NULL, 'Made of high-quality stainless steel.', '3 interchangeable blades: fine, thick, and strips.', 'Ergonomic, non-slip handle for comfortable and safe use.', 'Easy to clean, dishwasher-safe.', 'Compact size, perfect for storing in small spaces.'),
(450, 'Coupe-légumes multifonction spiraleur', 'Le coupe-légumes multifonction spiraleur est un outil de cuisine parfait pour couper et faire des spirales avec des légumes. Idéal pour préparer des salades, des accompagnements et des repas sains. Il dispose de 3 lames interchangeables pour créer des spirales fines, épaisses et des bandes.', 29.99, 10, 'available', 0.00, NULL, '[\"1736941026_cortador_1.png\",\"1736941026_cortador_2.png\"]', 1735801724, 3, '1736945215', NULL, 'Fabriqué en acier inoxydable de haute qualité.', '3 lames interchangeables : fine, épaisse et en bandes.', 'Poignée ergonomique antidérapante pour un usage confortable et sécurisé.', 'Facile à nettoyer, compatible avec le lave-vaisselle.', 'Taille compacte, idéale pour un rangement facile.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `descripcion`, `created`, `updated`) VALUES
(1, 'Cliente', 'Rol para usuarios que realizan compras y gestionan su perfil sin acceso a funciones administrativas.', '2024-12-24 10:26:46', '2024-12-24 10:26:46'),
(2, 'Admin', 'Rol con acceso completo a todas las funciones del sistema, incluyendo la gestión de usuarios, productos y configuraciones.', '2024-12-24 10:27:08', '2024-12-24 10:27:08'),
(3, 'Super', 'Rol con todos los permisos y acceso total al sistema', '2025-07-17 15:33:55', '2025-07-17 15:33:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int NOT NULL,
  `Usuario` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NumeroDocumento` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Nombres` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Apellidos` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NroTelefono` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Direccion` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Pais` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Ciudad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CodigoPostal` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Rol` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imagen` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Usuario`, `Password`, `NumeroDocumento`, `Nombres`, `Apellidos`, `Email`, `NroTelefono`, `Direccion`, `Pais`, `Ciudad`, `CodigoPostal`, `Rol`, `imagen`, `status`) VALUES
(38, 'LuisRamos2023', '$2y$10$Q0BzAPmKSwyrwcdrFBntyO94KG1i1m9HA503.FLY3vtT.7H2kdGZC', '17399711', 'Luis Fernando', 'Ramos Lara', 'luis.ramos@pablogarciajc.com', '5555555555', 'malaga', 'EC', 'Pichincha', '29009', '1', '1736330934_19.png', 'active'),
(39, 'Admin CMS', '$2y$10$oeLFSmdgXtOJcsxHt1v4f.XD8kpxKGitaJzRdQBzsl2QuJnX1ICYS', 'y6005812C', 'Administrador', 'CMS', 'admin@pablogarciajc.com', '372354875', 'malaga', 'ES', 'Madrid', '29009', '2', '1736330863_19.png', 'active'),
(55, 'Santis', '$2y$04$XKlCE0QadX1Y4hdzFSjikuJalBaASdHSxQH/b3xoYNRa3f.HrvXZ.', '98765432', 'Marco Antonio', 'Santis Gómez', 'santis@pablogarciajc.com', '+34 654 789 123', 'Calle Ficticia 123, Piso 4, Departamento B', 'ES', 'Madrid', '28001', '1', '1736330972_19.png', 'active'),
(56, 'JuanPerez123', '$2y$04$TcZBSlnP7Vkrtz9EoN.kYOoj/jQZ6ByHR8NehDaWwSyvRpjRIVi1q', '11223344', 'Juan Carlos', 'Pérez López', 'juan.perez@pablogarciajc.com', ' +52 5523456789', 'Calle Principal 456, Colonia Centro', 'MX', 'Ciudad', '06700', '1', '1736330997_19.png', 'active'),
(57, 'AnaLopez88', '$2y$04$k72Y6lWTp4NZQSCS1W6ogOGoVwDrmVU5O8zkGfc9e6eyA7nSEj2RC', '22446688', 'Ana María', 'López Gómez', 'ana.lopez@pablogarciajc.com', '+34 612345678', 'Avenida del Sol 789, 2ºA', 'FR', 'París', '08025', '1', '1736328846_16.png', 'active'),
(58, 'CarlosRguez', '$2y$04$pUsm6yl1gdHNebG2DgOileywlRR74BZk8vI0YSmtsFJXkOj9PKNfa', '33445566', 'Carlos Alberto', 'Rodríguez Torres', 'carlos.rodriguez@pablogarciajc.com', ' +1 3051234567', '1234 NW 5th Ave, Apt 1B', 'UK', 'Londres', '33101', '1', '1736331020_19.png', 'active'),
(59, 'LuciaMendoza', '$2y$04$6UCwlgelrfr8w5gCH.E2RuiFF/8xExFXt2cJJD2r7ta9Zo7Tr3Dfy', '44556677', 'Lucía Fernanda', 'Mendoza Pérez', 'lucia.mendoza@pablogarciajc.com', '+57 3012345678', 'Carrera 10 #20-30', 'DE', 'Berlín', '110111', '1', '1736328911_16.png', 'active'),
(60, 'PedroGomez', '$2y$04$0yUieZtrLXU9/aeZca2qtuo.9TA8F2QKojeZWq4tMyxRbWycF6j1q', '55667788', 'Pedro Luis', 'Gómez Ramírez', 'pedro.gomez@pablogarciajc.com', '+33 612345678', '15 Rue de la Paix', 'AR', 'Buenos', '75001', '1', '1736331039_19.png', 'active'),
(61, 'SofiaMartinez', '$2y$04$KZ3aiMZYGaRvaLeC2h.v7O8YAVwjXSvY1P2g/6991gCNZ3pdJmeMq', '66778899', 'Sofía Alejandra', 'Martínez Soto', 'sofia.martinez@pablogarciajc.com', '+39 321654987', 'Via Roma 21', 'BR', 'Río', '00184', '1', '1736328959_16.png', 'active'),
(62, ' DiegoHerrera', '$2y$04$e.X/qec/y.9vdFN/ed6GcuiOB9fC1rNWySfQjMnAKrwA6OD7Wqd/K', '77889900', 'Diego Armando', 'Herrera Díaz', 'diego.herrera@pablogarciajc.com', '+54 91123456789', 'Calle Florida 123, Piso 3', 'BR', 'Río', 'C1000', '1', '1736331058_19.png', 'active'),
(63, 'MariaGonzalez', '$2y$04$W9cjqXzhFKkwKZrnPswG/eQ.nFI.dWt487WOIcZT17AF2wSUi64VK', '88990011', 'María Isabel', 'González Ruiz', 'maria.gonzalez@pablogarciajc.com', '+34 699876543', 'Calle de Alcalá 456', 'EC', 'Quito', '41001', '1', '1736329005_16.png', 'active'),
(64, 'JavierOrtiz', '$2y$04$8hp32E8z3Pm07WA/hs8SfuF3SXFKmn0aMr7dmCS8/0SjPB3awkzL2', ' 99001122', 'Javier Ernesto', 'Ortiz Velasco', 'javier.ortiz@pablogarciajc.com', '+49 1723456789', 'Hauptstraße 12', 'DE', 'Berlín', '10115', '1', '1736331081_19.png', 'active'),
(65, 'LauraVega', '$2y$04$3TgMXDPsGyeAUczoOYVov.Z0r8tWqcP/PXEBNaRW/ER0pbgwv1zrq', '11112233', 'Laura Patricia', 'Vega Torres', 'laura.vega@pablogarciajc.com', '+61 412345678', '123 Queen St', 'IT', 'Roma', '2000', '1', '1736329054_16.png', 'active'),
(69, 'superadmin', '$2y$04$Rsy3JUlx60B7tlQgWgUApeVO6waiBLDC5GJ0n7E7KbTqOmMCDhRJK', NULL, NULL, NULL, 'superadmin@superadmin.com', NULL, NULL, NULL, NULL, NULL, '3', NULL, 'active');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_id` (`parent_id`),
  ADD KEY `fk_categorias_idioma` (`idioma_id`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `fk_comentarios_idioma` (`idioma_id`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Indices de la tabla `linea_pedidos`
--
ALTER TABLE `linea_pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido_id` (`pedido_id`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pedido_usuario` (`usuario_id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_productos_idioma` (`idioma_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UQ_USUARIOS_USUARIO` (`Usuario`),
  ADD UNIQUE KEY `UQ_USUARIOS_EMAIL` (`Email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=634;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=314;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=441;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `linea_pedidos`
--
ALTER TABLE `linea_pedidos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=584;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=296;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=451;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `fk_categorias_idioma` FOREIGN KEY (`idioma_id`) REFERENCES `idiomas` (`id`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`Id`),
  ADD CONSTRAINT `fk_comentarios_idioma` FOREIGN KEY (`idioma_id`) REFERENCES `idiomas` (`id`);

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `linea_pedidos`
--
ALTER TABLE `linea_pedidos`
  ADD CONSTRAINT `linea_pedidos_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_pedido_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_productos_idioma` FOREIGN KEY (`idioma_id`) REFERENCES `idiomas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
