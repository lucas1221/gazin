-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Mar-2022 às 02:28
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gazin`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `desenvolvedores`
--

CREATE TABLE `desenvolvedores` (
  `id` int(11) NOT NULL,
  `devnivel` varchar(45) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sexo` char(1) NOT NULL,
  `datadenascimento` date NOT NULL,
  `hobby` varchar(45) NOT NULL,
  `idade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `desenvolvedores`
--

INSERT INTO `desenvolvedores` (`id`, `devnivel`, `nome`, `sexo`, `datadenascimento`, `hobby`, `idade`) VALUES
(2, 'junior', 'Pedro Paulo', 'M', '2022-03-07', 'Andar de Bike', 25),
(3, 'junior', 'Lucas', 'M', '2022-03-28', 'Andar de Bicicleta', 39);

-- --------------------------------------------------------

--
-- Estrutura da tabela `niveis`
--

CREATE TABLE `niveis` (
  `idniveis` int(11) NOT NULL,
  `nivel` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `niveis`
--

INSERT INTO `niveis` (`idniveis`, `nivel`) VALUES
(1, 'junior');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `desenvolvedores`
--
ALTER TABLE `desenvolvedores`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_devs` (`devnivel`);

--
-- Índices para tabela `niveis`
--
ALTER TABLE `niveis`
  ADD PRIMARY KEY (`nivel`),
  ADD UNIQUE KEY `idniveis` (`idniveis`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `desenvolvedores`
--
ALTER TABLE `desenvolvedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `niveis`
--
ALTER TABLE `niveis`
  MODIFY `idniveis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `desenvolvedores`
--
ALTER TABLE `desenvolvedores`
  ADD CONSTRAINT `fk_devs` FOREIGN KEY (`devnivel`) REFERENCES `niveis` (`nivel`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
