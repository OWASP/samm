-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2020 at 08:37 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `samm`
--

-- --------------------------------------------------------

--
-- Table structure for table `check_tab`
--

CREATE TABLE `check_tab` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `check_tab`
--

INSERT INTO `check_tab` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('G-SM-A-1-1', 'Create and Promote', 1, 'Has the organization defined a set of risks by which applications could be prioritized?\r\n', 'You have captured the risk appetite of your organizations executive leadership\r\nRisks have been vetted and approved by the organizations leadership\r\nYou have identified the principal business and technical threats to your organizations assets and data\r\nRisks have been documented and are accessible to relevant stakeholders\r\n\r\n', 'Yes, covers most significant risks', 0, '', '', 'Commented on G-SM-A-1-1', '', '', '', '', '', '', 'No', 'Yes, basic risks', 'Yes, covers most significant risks', 'Yes, covers risks and opportunities'),
('G-SM-A-2-1', 'Create and Promote', 2, 'Do you have a strategic plan for application security that is used to make decisions?', 'The plan reflects the organization\'s business priorities and risk appetite\r\nThe plan includes measurable milestones and a budget\r\nElements of the plan are consistent with the organization‚Äôs business drivers and risks\r\nThe plan lays out a roadmap for achieving strategic and tactical initiatives\r\nYou have obtained buy-in from organizational stakeholders, including development teams\r\n', 'Yes, we consult the plan before making significant decisions', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, we review it annually', 'Yes, we consult the plan before making significant decisions', 'Yes, we consult the plan often, and it\'s aligned with our application security strategy'),
('G-SM-A-3-1', 'Create and Promote', 3, 'Do you regularly review and update the Strategic Plan for Application Security?', 'You review and update the plan, in response to significant changes in the business environment, the organization, or its risk appetite\r\nPlan update steps include reviewing the plan with all the stakeholders and updating the business drivers and strategies\r\nYou adjust the plan and roadmap, based on lessons learned from completed roadmap activities\r\nYou publish progress information on roadmap activities, available to all stakeholders, including development team\r\n', 'Yes, but review is ad-hoc', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, but review is ad-hoc', 'Yes, we review it every two years or so', 'Yes, we review it at least annually'),
('G-SM-B-1-1', 'Measure and Improve', 1, 'Are you using a set of metrics to measure the effectiveness and efficiency of the application security program across applications?\r\n', 'Each metric is documented and includes a description of the sources, measurement coverage, and an understanding on how the metric can be used to describe or explain application security trends\r\nMetrics include measures of Efforts, Results, and the Environment measurement categories\r\nMajority of the metrics are frequently measured, easy or inexpensive to gather, and are expressed as a cardinal number or a percentage\r\nMetrics are published and are accessible by application security and development teams\r\n', 'Yes, for all three metrics categories', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for one metrics category', 'Yes, for two metrics categories', 'Yes, for two metrics categories'),
('G-SM-B-2-1', 'Measure and Improve', 2, 'Did you define Key Perfomance Indicators (KPI) from available application security metrics?', 'KPIs are defined after enough information has been gathered to establish realistic objectives\r\nKPIs have been developed with the buy-in from the leadership and teams responsible for application security\r\nKPIs are documented and available to the application teams, and include actionable tresholds requiring immediate attention in the event KPIs reach levels considered unacceptable\r\nSuccess of the application security program is clearly visible based on defined KPIs\r\n', 'Yes, the most of them', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('G-SM-B-3-1', 'Measure and Improve', 3, 'Do you influence the Application Security strategy and roadmap based on application security metrics and KPIs?', 'KPIs are reviewed regularly (at least yearly) for their efficiency and effectiveness\r\nMajority of the changes to the application security strategy are triggered by KPIs and application security metric\r\n', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time');

-- --------------------------------------------------------

--
-- Table structure for table `comment_history`
--

CREATE TABLE `comment_history` (
  `question` text NOT NULL,
  `id` int(11) NOT NULL,
  `groupname` varchar(500) NOT NULL,
  `secpractice` varchar(500) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `commentor` varchar(500) NOT NULL,
  `created` datetime NOT NULL,
  `score` float NOT NULL,
  `qoid` varchar(11) NOT NULL,
  `answer` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment_history`
--

INSERT INTO `comment_history` (`question`, `id`, `groupname`, `secpractice`, `comment`, `commentor`, `created`, `score`, `qoid`, `answer`) VALUES
('Do you use repeatable deployment processes?\r\n', 6, 'Implementation', 'Secure Deployment', 'check', 'Auditor', '2020-03-10 12:51:27', 1, 'I-SD-A-1-1', 'Yes, for most of the applications\r\n'),
('Are deployment processes automated and taking into account security?', 7, 'Implementation', 'Secure Deployment', 'testing', 'Auditor', '2020-03-10 12:53:48', 0.25, 'I-SD-A-2-1', 'Yes, for some applications'),
('Are deployment processes automated and taking into account security?', 8, 'Implementation', 'Secure Deployment', 'ok', 'Auditor', '2020-03-10 12:54:41', 1, 'I-SD-A-2-1', 'Yes, for some applications'),
('Do you use repeatable deployment processes?\r\n', 9, 'Implementation', 'Secure Deployment', 'check', 'Auditor', '2020-03-10 13:14:53', 1, 'I-SD-A-1-1', 'Yes, for most of the applications\r\n'),
('Do you use repeatable deployment processes?\r\n', 10, 'Implementation', 'Secure Deployment', 'checking', 'Auditor', '2020-03-10 13:18:30', 1, 'I-SD-A-1-1', 'Yes, for most of the applications\r\n'),
('Do you use repeatable deployment processes?\r\n', 11, 'Implementation', 'Secure Deployment', 'ok', 'User', '2020-03-10 13:28:00', 1, 'I-SD-A-1-1', 'Yes, for most of the applications\r\n'),
('Are you classifying applications according to business risk based on a simple, but predefined set of questions?', 12, 'Design', 'Threat Assessment', 'check', 'Auditor', '2020-03-11 14:56:16', 1, 'D-TA-A-1-1', 'Yes, the most of them'),
('Are you classifying applications according to business risk based on a simple, but predefined set of questions?', 13, 'Design', 'Threat Assessment', 'test', 'Auditor', '2020-03-11 15:07:21', 0.5, 'D-TA-A-1-1', 'Yes, at least half of them'),
('Are you classifying applications according to business risk based on a simple, but predefined set of questions?', 14, 'Design', 'Threat Assessment', 'check', 'Admin', '2020-03-11 18:19:21', 0.5, 'D-TA-A-1-1', 'Yes, at least half of them'),
('Do you track all known security defects in a central location per defined scope?', 15, 'Implementation', 'Defect Management', 'check', 'Auditor', '2020-03-12 12:53:01', 0.5, 'I-DM-A-1-1', 'Yes, for at least half of the applications'),
('Has the organization defined a set of risks by which applications could be prioritized?\r\n', 16, 'Governance', 'Strategy & Metrics', 'check', 'Auditor', '2020-03-12 15:13:23', 0.5, 'G-SM-A-1-1', 'Yes, covers most significant risks'),
('Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?', 17, 'Governance', 'Education & Guidance', 'check', 'Auditor', '2020-03-12 15:25:47', 1, 'G-EG-B-3-1', 'Yes, effective for most of the organization'),
('Have you identified a Security Champion for each development team?', 18, 'Governance', 'Education & Guidance', 'check', 'Auditor', '2020-03-12 15:29:34', 0, 'G-EG-B-1-1', 'No'),
('Do project teams specify security requirements during development?\r\n', 19, 'Design', 'Security Requirements', 'test', 'Auditor', '2020-03-12 15:32:03', 0.25, 'D-SR-A-1-1', 'Yes, some of them');

-- --------------------------------------------------------

--
-- Table structure for table `design_secure_arch`
--

CREATE TABLE `design_secure_arch` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `design_secure_arch`
--

INSERT INTO `design_secure_arch` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('D-SA-A-1-1', 'Architecture Design', 1, 'Do teams use security principles during design?\r\n', 'You have an agreed upon checklist of security principles\r\nYour checklist(s) are stored in an accessible location\r\nSecurity principles have been explained to relevant stakeholders', 'Yes, at least half of the time\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, at least half of the time'),
('D-SA-A-2-1', 'Architecture Design', 2, 'Do you favour the use of standard security services during design?\r\n', 'You have a documented list of reusable security services, available to relevant stakeholders\r\nYou have reviewed the baseline security posture for each selected service\r\nYour designers are trained to integrate each selected service following available guidance', 'Yes, for at least half of the applications\r\n', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('D-SA-A-3-1', 'Architecture Design', 3, 'Do you base your design on available reference architectures?\r\n', 'You have one or more approved reference architectures, documented and available to stakeholders.\r\nYou improve the reference architectures continuously based on insights and best practices.\r\nYou provide a set of components, libraries, and tools to implement each reference architecture.', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('D-SA-B-1-1', 'Technology Management', 1, 'Do you evaluate the security quality of important technologies used within the development organisation?\r\n', '\"You have a list of the most Important technologies used in (or in support of) each application.\r\nYou identify and track technological risks\r\nYou ensure that the risks to these technologies are in line with the organisational baseline', 'Yes, for most of the applications\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('D-SA-B-2-1', 'Technology Management', 2, 'Do you have a list of recommended technologies for use in the development organisation?\r\n', 'The list is based on technologies used in the software portfolio\r\nLead architects and developers review and approve the list\r\nThe list is shared across the development organisation\r\nThe list is regularly (at least yearly) reviewed and updated', 'Yes, for at least half of the technology domains\r\n', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some of the technology domains', 'Yes, for at least half of the technology domains', 'Yes, for the majority of the technology domains'),
('D-SA-B-3-1', 'Technology Management', 3, 'Do you enforce the use of recommended technologies within the development organisation?\r\n', 'Applications are regularly monitored for the correct use of the list of recommended technologies\r\nViolations against the list are solved in accorandance with the organisational‚Äôs policy\r\nThe number of violations on a yearly basis falls within objectives or concrete actions are taken to improve', 'No\r\n', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications');

-- --------------------------------------------------------

--
-- Table structure for table `design_security`
--

CREATE TABLE `design_security` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `design_security`
--

INSERT INTO `design_security` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('D-SR-A-1-1', 'Software Requirements', 1, 'Do project teams specify security requirements during development?\r\n', 'Security requirements are derived from functional requirements and customer/organization concerns.\r\nSecurity requirements are specific, measurable, and reasonable.\r\nSecurity requirements are in line with the organisational baseline.', 'Yes, the most of them', 1, '', 'Auditor', 'test', 'Auditor', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-SR-A-2-1', 'Software Requirements', 2, 'Are the artifacts of the security requirements gathering process well defined and structured, with prioritization?\r\n', 'Security requirements take into consideration domain specific knowledge when applying policies and guidance to product development.\r\nDomain experts are involved in the requirements definition process.\r\nAn agreed upon structured notation exists for security requirements.\r\nDevelopment teams have a security champion dedicated to reviewing security requirements and outcomes.', 'Yes, some of them\r\n', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-SR-A-3-1', 'Software Requirements', 3, 'Is a standard requirements framework used to streamline the elicitation of security requirements?\r\n', 'An existing security requirements framework is available for project teams.\r\nThe framework is categorized by common requirements as well as standards-based requirements.\r\nThe framework gives clear guidance on the quality of requirements and formalizes how to describe them.\r\nThe framework is adaptable to specific business requirements.', 'No\r\n', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('D-SR-B-1-1', 'Supplier Security', 1, 'Do stakeholders review vendor collaborations for security requirements and methodology?\r\n', 'During the creation of third-party agreements, specific security requirements, activities, and processes are considered for inclusion.\r\nA vendor questionnaire is available and used to assess the strengths and weaknesses of your suppliers.\r\n', 'Yes, the most of them\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-SR-B-2-1', 'Supplier Security', 2, 'Does the vendor meet the security responsibilities and quality measures to be in line with service level agreements as defined by the organization?\r\n', 'During the creation of vendor agreements, security requirements are discussed with the vendor.\r\nVendor agreements provide specific guidance on security defect remediation within an agreed upon timeframe.\r\nThe organization has a templated agreement of responsibilities and service levels for key vendor security processes.\r\nKey performance indicators are measured.', 'Yes, the most of them\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-SR-B-3-1', 'Supplier Security', 3, 'Are vendors aligned with standard security controls and software development tools and processes that the organization utilizes?\r\n', 'The vendor has a secure SDLC that includes secure build, secure deployment, defect management and incident management that align with those used in your organization.\r\nCompensating controls, such as software composition analysis and independent penetration testing before a major release, are used to verify the solution meets quality and security objectives when standard processes are not available.', 'Yes, some of them\r\n', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time');

-- --------------------------------------------------------

--
-- Table structure for table `design_threat`
--

CREATE TABLE `design_threat` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `design_threat`
--

INSERT INTO `design_threat` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('D-TA-A-1-1', 'Application Risk Profile', 1, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', 'A risk classification should exist and be agreed upon\r\nThe application team should understand the risk classification\r\nThe risk classification covers critical aspects of business risks the organization is facing\r\nThe organization has an inventory for the applications in scope', 'Yes, at least half of them', 0.5, '', 'Auditor', 'check', 'Admin', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-TA-A-2-1', 'Application Risk Profile', 2, 'Are you using centralized and quantified application risk profiles to evaluate business risk?\r\n', 'The application risk profile is in line with the organisational risk standard\r\nThe application risk profile must cover impact to security and privacy\r\nThe quality of the risk profile is validated using manual and/or automated means\r\nThe application risk profiles are stored in a central inventory', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('D-TA-A-3-1', 'Application Risk Profile', 3, 'Do you regularly review and update the risk profiles for your applications?\r\n', 'The organisational risk standard takes into account historical feedback to improve the evaluation method\r\nSignificant changes in the application or business context trigger a review of the relevant risk profiles', 'Yes, sporadically', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, sporadically', 'Yes, upon change of the application', 'Yes, at least yearly'),
('D-TA-B-1-1', 'Threat Modeling', 1, 'Are you evaluating the technical architecture of your applications for potential threats?\r\n', 'Application trust boundaries are being reviewed\r\nThreat identification should cover different types of threats', 'Yes, the most of them', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-TA-B-2-1', 'Threat Modeling', 2, 'Are you using a standard methodology to evaluate the threats to your applications?\r\n', 'Threat modeling activities should be carried out/supported by people with good understanding of the concept by experience or training\r\nThe methodology stipulates the different inputs that are required to perform an in-depth assessment\r\nThreat model deliverables are standardized and accessible across the organisation', 'Yes, some of them\r\n', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('D-TA-B-3-1', 'Threat Modeling', 3, 'Do you regularly review and update the threat models for your applications?', 'The threat model methodology takes into account historical feedback to improve the evaluation method\r\nChanges in the application or business context trigger a review of the relevant threat models\r\nThreat models are independently evaluated for their quality.', 'Yes, some of the time\r\n', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time');

-- --------------------------------------------------------

--
-- Table structure for table `governance_education`
--

CREATE TABLE `governance_education` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `governance_education`
--

INSERT INTO `governance_education` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('G-EG-A-1-1', 'Training and Awareness', 1, 'Do you require employees involved with application development to take SDLC training?', 'Training is repeatable, consistent, and available to anyone involved with software development lifecycle.\r\nTraining includes the latest OWASP Top 10 if appropriate.\r\nTraining includes multiple concepts such as Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability.\r\nTraining requires a sign-off or an acknowledgement from each attendee.\r\nThe training been updated in the last 12 months.\r\nEmployees are required to go through the training during the onboarding process.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('G-EG-A-2-1', 'Training and Awareness', 2, 'Has the training been customized for individual roles, such as developers, testers, or security champions?', 'Training includes all topics covered within maturity level 1, and adds more specific tools, techniques, and demonstrations\r\nTraining is mandatory for all employees and contractors.\r\nThe training includes input from in-house SMEs and trainees.\r\nTraining includes demonstrations of tools and techniques developed in-house.\r\nFeedback collected post training is used to enhance and make future training more relevant.', 'Yes, at least half of the content\r\n', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some content has been updated', 'Yes, at least half of the content', 'Yes, the majority of the content'),
('G-EG-A-3-1', 'Training and Awareness', 3, 'Have you implemented a Learning Management System or equivalent to track employee training / certification processes?', 'A Learning Management System (LMS) is used to track training and any certifications\r\nTraining is based on internal standards, policies, and procedures instead of general \"\"best-practices\"\"\r\nTraining is mandatory, and the certification program or attendance record is used to determine access to development systems and resources.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some of the trianing', 'Yes, at least half of the training', 'Yes, the majority of training'),
('G-EG-B-1-1', 'Organization and Culture', 1, 'Have you identified a Security Champion for each development team?', 'Each development team has a Security Champion assigned to them\r\nSecurity Champions receive appropriate training to ensure effectiveness\r\nApplication Security and Development teams receive periodic briefings from Security Champions on the overall status of security initiatives and fixes\r\nResults of external testing are reviewed by the Security Champion prior to adding to the application backlog', 'Yes, most of the time', 1, '', 'Auditor', 'check', 'Auditor', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time'),
('G-EG-B-2-1', 'Organization and Culture', 2, 'Does the organization have a Secure Software Center of Excellence (SSCE)?', 'The SSCE has a formal charter defining its role in the organization.\r\nDevelopment teams review all significant architectural changes with SSCE\r\nThe SSCE publishes SDLC standards and guidelines related to Application Security\r\nIdentified Product Champions are responsible for promotion of use and specific security tools.', 'Yes, effective for some of the organization', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, started to implement', 'Yes, effective for some of the organization', 'Yes, effective for most of the organization'),
('G-EG-B-3-1', 'Organization and Culture', 3, 'Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?', 'Organization promotes use of a single portal across different teams and business units\r\nThe portal is used for timely information such as notification of security incidents, tool updates, architectural standard changes, and other related announcements\r\nThe portal is widely recognized by developers and architects as a centralized repository of the organization-specific application security information\r\nAll content should be considered persistent and searchable\r\nThe portal provides access to application-specific security metrics', 'Yes, effective for most of the organization', 1, '', 'Auditor', 'check', 'Auditor', 'uploads/', '', '', '', 'Capture.PNG', 'No', 'Yes, started to implement', 'Yes, effective for some of the organization', 'Yes, effective for most of the organization');

-- --------------------------------------------------------

--
-- Table structure for table `governance_policy`
--

CREATE TABLE `governance_policy` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `governance_policy`
--

INSERT INTO `governance_policy` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('G-PC-A-1-1', 'Policy and Standards', 1, 'Have you developed a common set of policies and standards that are applied throughout your organization?', 'You have adapted existing standards appropriate for the organization’s industry, to account for domain-specific considerations\r\nYour standards are aligned with your policies, and incorporate technology-specific implementation guidance', 'Yes, for most of the applications', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('G-PC-A-2-1', 'Policy and Standards', 2, 'Do you have clearly documented, repeatable evaluation methods to test for adherence to policies and standards?', 'You have created verification checklists and test scripts (where applicable), aligned with the policy\'s requirements, and the implementation guidance in the associated standard(s)\r\nYou have created versions adapted to each development methodology/technology in use within the organization', 'Yes, for most of the policies and standards', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some of the policies and standards', 'Yes, for at least half of the policies and standards', 'Yes, for most of the policies and standards'),
('G-PC-A-3-1', 'Policy and Standards', 3, 'Do you regularly report on policy and standard compliance, and use that information to guide compliance improvement efforts?', 'You have procedures (automated, if possible) in place, to regularly generate compliance reports\r\nYou have ensured compliance reports are delivered to all relevant stakeholders\r\nStakeholders use the reported compliance status information to identify areas for improvement', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, but review is ad-hoc', 'Yes, we review it every two years or so', 'Yes, we review it at least annually'),
('G-PC-B-1-1', 'Compliance Management', 1, 'Do you have a complete picture of your external compliance obligations?', 'You have identified all sources of external compliance obligations\r\nYou have captured and reconciled compliance obligations from all sources', 'Yes, for most of the applications', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('G-PC-B-2-1', 'Compliance Management', 2, 'Do you have a standard set of security requirements, and verification procedures, addressing the organization\'s external compliance obligations?', 'You have mapped each external compliance obligation to a well-defined set of application requirements\r\nYou have defined verification procedures, including automated tests (when possible), to verify compliance with compliance-related requirements', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('G-PC-B-3-1', 'Compliance Management', 3, 'Do you regularly report on adherence to external compliance obligations, and use that information to guide efforts to close compliance gaps?', 'You have established, well-defined compliance metrics\r\nYou measure and report on applications\' compliance metrics following a regular cadence\r\nStakeholders use the reported compliance status information to identify compliance gaps, and prioritize gap remediation efforts', 'Yes, for most of the applications', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications');

-- --------------------------------------------------------

--
-- Table structure for table `governance_strategy`
--

CREATE TABLE `governance_strategy` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `governance_strategy`
--

INSERT INTO `governance_strategy` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('G-SM-A-1-1', 'Create and Promote', 1, 'Has the organization defined a set of risks by which applications could be prioritized?\r\n', 'You have captured the risk appetite of your organizations executive leadership\r\nRisks have been vetted and approved by the organizations leadership\r\nYou have identified the principal business and technical threats to your organizations assets and data\r\nRisks have been documented and are accessible to relevant stakeholders', 'Yes, covers risks and opportunities', 1, '', 'Auditor', 'check', 'Auditor', 'uploads/', '', '', '', 'Capture.PNG', 'No', 'Yes, basic risks', 'Yes, covers most significant risks', 'Yes, covers risks and opportunities'),
('G-SM-A-2-1', 'Create and Promote', 2, 'Do you have a strategic plan for application security that is used to make decisions?', 'The plan reflects the organizations business priorities and risk appetite\r\nThe plan includes measurable milestones and a budget\r\nElements of the plan are consistent with the organization‚Äôs business drivers and risks\r\nThe plan lays out a roadmap for achieving strategic and tactical initiatives\r\nYou have obtained buy-in from organizational stakeholders, including development teams', 'Yes, we consult the plan before making significant decisions', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, we review it annually', 'Yes, we consult the plan before making significant decisions', 'Yes, we consult the plan often, and it\'s aligned with our application security strategy'),
('G-SM-A-3-1', 'Create and Promote', 3, 'Do you regularly review and update the Strategic Plan for Application Security?', 'You review and update the plan, in response to significant changes in the business environment, the organization, or its risk appetite\r\nPlan update steps include reviewing the plan with all the stakeholders and updating the business drivers and strategies\r\nYou adjust the plan and roadmap, based on lessons learned from completed roadmap activities\r\nYou publish progress information on roadmap activities, available to all stakeholders, including development team', 'Yes, but review is ad-hoc', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, but review is ad-hoc', 'Yes, we review it every two years or so', 'Yes, we review it at least annually'),
('G-SM-B-1-1', 'Measure and Improve', 1, 'Are you using a set of metrics to measure the effectiveness and efficiency of the application security program across applications?\r\n', 'Each metric is documented and includes a description of the sources, measurement coverage, and an understanding on how the metric can be used to describe or explain application security trends\r\nMetrics include measures of Efforts, Results, and the Environment measurement categories\r\nMajority of the metrics are frequently measured, easy or inexpensive to gather, and are expressed as a cardinal number or a percentage\r\nMetrics are published and are accessible by application security and development teams', 'Yes, for two metrics categories', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for one metrics category', 'Yes, for two metrics categories', 'Yes, for two metrics categories'),
('G-SM-B-2-1', 'Measure and Improve', 2, 'Did you define Key Perfomance Indicators (KPI) from available application security metrics?', 'KPIs are defined after enough information has been gathered to establish realistic objectives\r\nKPIs have been developed with the buy-in from the leadership and teams responsible for application security\r\nKPIs are documented and available to the application teams, and include actionable tresholds requiring immediate attention in the event KPIs reach levels considered unacceptable\r\nSuccess of the application security program is clearly visible based on defined KPIs', 'Yes, the most of them', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('G-SM-B-3-1', 'Measure and Improve', 3, 'Do you influence the Application Security strategy and roadmap based on application security metrics and KPIs?', 'KPIs are reviewed regularly (at least yearly) for their efficiency and effectiveness\r\nMajority of the changes to the application security strategy are triggered by KPIs and application security metric', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `groupname` varchar(500) NOT NULL,
  `secpractice` varchar(200) NOT NULL,
  `Jan` float NOT NULL,
  `Feb` float NOT NULL,
  `Mar` float NOT NULL,
  `Apr` float NOT NULL,
  `May` float NOT NULL,
  `Jun` float NOT NULL,
  `Jul` float NOT NULL,
  `Aug` float NOT NULL,
  `Sep` float NOT NULL,
  `Oct` float NOT NULL,
  `Nov` float NOT NULL,
  `Dec` float NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`groupname`, `secpractice`, `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`, `id`) VALUES
('Governance', 'Strategy & Metrics', 0, 0, 1.63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
('Governance', 'Policy & Compliance', 0, 0, 2.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2),
('Governance', 'Education & Guidance', 0, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3),
('Design', 'Threat Assessment', 0, 0, 1.38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4),
('Design', 'Security Requirements', 0, 0, 1.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5),
('Design', 'Secure Architecture', 0, 0, 1.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6),
('Implementation', 'Secure Build', 0, 0, 1.13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7),
('Implementation', 'Secure Deployment', 0, 0, 1.88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8),
('Implementation', 'Defect Management', 0, 0, 1.38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9),
('Verification', 'Architecture Assessment', 0, 0, 1.38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10),
('Verification', 'Requirements Driven Testing', 0, 0, 1.13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11),
('Verification', 'Security Testing', 0, 0, 1.88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12),
('Operations', 'Incident Management', 0, 0, 1.38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13),
('Operations', 'Environment Management', 0, 0, 1.63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14),
('Operations', 'Operational Management', 0, 0, 1.63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15);

-- --------------------------------------------------------

--
-- Table structure for table `implement_defect`
--

CREATE TABLE `implement_defect` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `implement_defect`
--

INSERT INTO `implement_defect` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('I-DM-A-1-1', 'Defect Tracking (Flaws/Bugs/Process)', 1, 'Do you track all known security defects in a central location per defined scope?', 'The process includess strategy for handling false positives and accepting risk\r\nDefects stem from various sources / activities\r\nDeduplication is ensured per location.', 'Yes, for at least half of the applications', 0.5, '', 'Auditor', 'check', 'Auditor', 'uploads/', '', '', '', 'Capture.PNG', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-DM-A-2-1', 'Defect Tracking (Flaws/Bugs/Process)', 2, 'Do you take action on defects exceeding defined threshold?', 'The defined threshold is documented in an accessible location\r\nReaching the threshold triggers a timely alert to the relevant stakeholders\r\nYou don\'t deploy applications exceeding the threshold.', 'Yes, for some applications', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-DM-A-3-1', 'Defect Tracking (Flaws/Bugs/Process)', 3, 'Does independent security staff enforce the defined threshold?', 'Knowledgeable decision based on input from defect management system is ensured upon deployment\r\nThe classification of the defects is regularly verified.', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-DM-B-1-1', 'Metrics and Feedback/Learning', 1, 'Do you share defect information for remediation and improving training materials?', 'Basic information about defects is made available to fix them\r\nYou have improved your training materials based on the defect information in the last year.', 'Yes, for most of the applications\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-DM-B-2-1', 'Metrics and Feedback/Learning', 2, 'Do you improve your assurance program upon well-defined metrics?', 'Metrics for defect classification and categorization is documented and up to date\r\nExecutive management regularly receives information about defects has acted upon it in the last year\r\nDefects are mapped to a list of threats.', 'Yes, for at least half of the applications\r\n', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-DM-B-3-1', 'Metrics and Feedback/Learning', 3, 'Do you enrich defect metrics with relevant real time information?', 'Defect metrics are automatically correlated with real-time environment information\r\nRelevant stakeholders get timely update on significant changes in the defect classification\r\nTrends in defect development have been updated in the last year.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications');

-- --------------------------------------------------------

--
-- Table structure for table `implement_secure_build`
--

CREATE TABLE `implement_secure_build` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `implement_secure_build`
--

INSERT INTO `implement_secure_build` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('I-SB-A-1-1', 'Build Process', 1, 'Do you use repeatable build processes?\r\n', 'You have enough information to recreate the build processes\r\nYour build documentation up to date\r\nYour build documentation is stored in an accessible location\r\nProduced artifact checksums are created during build to support later verification\r\n', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SB-A-2-1', 'Build Process', 2, 'Are build processes automated?\r\n', 'Your build tools are hardened as per best practice and vendor guidance\r\nYou encrypt the secrets required by the build tools and control access based on the principle of least privilege', 'Yes, for at least half of the applications\r\n', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SB-A-3-1', 'Build Process', 3, 'Do you integrate automated security checks in build processes?\r\n', 'You have a maximum accepted severity for vulnerabilties\r\nYou log warnings and failures in a centralized system\r\nBuild processes prevent deployment to production when security checks fail\r\nYou select and configure tools to evaluate each application against its security requirements', 'Yes, for some applications', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SB-B-1-1', 'Software Dependencies', 1, 'Do you evaluate security risk stemming from used dependencies?\r\n', 'You have current bill of materials (BOM) for every application\r\nYou can quickly find out which applications are affected by a particular CVE\r\nYou have provably analyzed and addressed findings from dependencies at least once in the last three months', 'Yes, for most of the applications\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SB-B-2-1', 'Software Dependencies', 2, 'Is 3rd party dependency risk handled by a formal process?\r\n', 'Dependencies are automatically evaluated for new CVEs\r\nAbove defined criticality threshold, responsible staff is alerted\r\nLicense changes with possible impact on legal application usage are automatically detected and alerted\r\nUsage of unmaintained dependencies is tracked and alerted', 'Yes, for at least half of the applications\r\n', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SB-B-3-1', 'Software Dependencies', 3, 'Do you prevent build of software if it\'s affected by vulnerabilities in dependencies?\r\n', 'Your build system is connected to a system for tracking 3rd party dependency risk, causing build to fail unless the vulnerability is evaluated to be a false positive or the risk is explicitely accepted.\r\nYou scan your dependencies using a static analysis tool\r\nYou report findings back to dependency authors using an established responsible disclosure process\r\nUsing a new dependency which has not been evaluated for security risk causes failing the build.', 'No\r\n', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications');

-- --------------------------------------------------------

--
-- Table structure for table `implement_secure_deploy`
--

CREATE TABLE `implement_secure_deploy` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `implement_secure_deploy`
--

INSERT INTO `implement_secure_deploy` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('I-SD-A-1-1', 'Deployment Process', 1, 'Do you use repeatable deployment processes?\r\n', 'You have enough information to run the deployment processes\r\nYour deployment documentation up to date\r\nYour deployment documentation is accessible to relevant stakeholders\r\nYou ensure that only defined qualified personnel can trigger a deployment\r\nYou harden the tools that are used within the deployment process.', 'Yes, for at least half of the applications', 0.5, 'User', 'Auditor', 'ok', 'User', 'uploads/', '', '', '', 'Capture.PNG', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SD-A-2-1', 'Deployment Process', 2, 'Are deployment processes automated and taking into account security?', 'Deployment includes automated security testing procedures\r\nResponsible staff is alerted with identified vulnerabilities\r\nYou have logs available for your past deployments for a defined period of time.', 'Yes, for most of the applications', 1, '', '', 'ok', 'Auditor', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SD-A-3-1', 'Deployment Process', 3, 'Do you consistently validate the integrity of deployed artifacts?\r\n', 'Deployment is prevented or rolled back in case integrity breach is detected\r\nSoftware without a valid integrity check is not deployed.', 'Yes, for most of the applications', 1, '', '', 'check', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SD-B-1-1', 'Secret Management', 1, 'Do you limit access to application secrets according to the need to know principle?', 'You store application secrets protected in a secured location.', 'Yes, for most of the applications', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SD-B-2-1', 'Secret Management', 2, 'Do you minimize permanent storage of secrets in application artefacts, for instance by injecting them into the configuration using an automated process?', 'Under normal circumstances, no humans access secrets during deployment procedures\r\nAny abnormal access to secrets is logged and alerted.', 'Yes, for some applications', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('I-SD-B-3-1', 'Secret Management', 3, 'Do you regenerate application secrets during deployment?', 'Secrets are generated and synchronized using a vetted solution\r\nDetection of a secret in a configuration file fails the deployment.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications');

-- --------------------------------------------------------

--
-- Table structure for table `operate_environment`
--

CREATE TABLE `operate_environment` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operate_environment`
--

INSERT INTO `operate_environment` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('O-EM-A-1-1', 'Configuration Hardening', 1, 'Do you harden configurations for key components across your whole technology stack?', 'You have identified the scope for this activity\r\nYou work with public sources to gather recommendations for your configurations.', 'Yes, for most of the applications', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-EM-A-2-1', 'Configuration Hardening', 2, 'Do you follow a process for incident detection?Do you maintain hardening baselines for your components?', 'There is an owner for each baseline\r\nThe owner is responsible for keeping baselines up to date\r\nBaselines are stored in an accessible location\r\nEmployees responsible for configurations are trained in these baselines.', 'Yes, for some components', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some components', 'Yes, for at least half of the components', 'Yes, for most of the components'),
('O-EM-A-3-1', 'Configuration Hardening', 3, 'Do you evaluate and track conformity with the hardening baselines?', 'You review and update baselines at least annually.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-EM-B-1-1', 'Patching and Updating', 1, 'Do you identify and patch vulnerable components?', 'You have an up-to-date list of components with versions\r\nYou review public sources regularly for vulnerabilities related to your components.', 'Yes, for at least half of the components', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some components', 'Yes, for at least half of the components', 'Yes, for most of the components'),
('O-EM-B-2-1', 'Patching and Updating', 2, 'Do you follow an established process for updating components across your whole technology stack?', 'The process includes vendor information for 3rd party patches\r\nThe process considers external sources to gather information about zero day attacks, and take appropriate risk mitigation steps\r\nThe process includes guidance with priorities for updates of components.', 'Yes, for most of the components', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some components', 'Yes, for at least half of the components', 'Yes, for most of the components'),
('O-EM-B-3-1', 'Patching and Updating', 3, 'Do you regularly evaluate components and review patch level status?', 'You update the list with components and versions\r\nYou identify and update missing updates according to existing SLA\r\nYou review and update the process based on feedback from the people who perform patching.', 'Yes, for some components', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some components', 'Yes, for at least half of the components', 'Yes, for most of the components');

-- --------------------------------------------------------

--
-- Table structure for table `operate_incident`
--

CREATE TABLE `operate_incident` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operate_incident`
--

INSERT INTO `operate_incident` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('O-IM-A-1-1', 'Incident Detection', 1, 'Do you analyze log data for possible security incidents periodically?', 'You have a contact point for the creation of security incidents\r\nYou analyze data in accordance with the log data retention periods\r\nThe frequency of this analysis is aligned with the criticality of your applications.', 'Yes, for most of the applications', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-IM-A-2-1', 'Incident Detection', 2, 'Do you follow a process for incident detection?', 'The process has a dedicated owner\r\nThere is process documentation stored in an accessible location\r\nThe process considers and escalation path for further analysis\r\nEmployees responsible for incident detection are trained in this process\r\nYou have a checklist of potential attacks to simplify incident detection.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-IM-A-3-1', 'Incident Detection', 3, 'Do you review and update the incident detection process regularly?', 'You perform reviews at least annually\r\nYou update the checklist of potential attacks with external and internal data.', 'Yes, for some applications', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-IM-B-1-1', 'Incident Response', 1, 'Do you respond upon detected incidents?', 'You have a defined person or role for incident handling\r\nYou document security incidents.', 'Yes, for at least half of the incidents', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some of the incidents', 'Yes, for at least half of the incidents', 'Yes, for most of the incidents'),
('O-IM-B-2-1', 'Incident Response', 2, 'Do you have a repeatable process for incident handling?', 'You have an agreed upon incident classification\r\nThe process considers Root Case Analysis for high severity incidents\r\nEmployees responsible for incident response are trained in this process\r\nForensic analysis tooling is available.', 'Yes, for some types of incidents', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some types of incidents', 'Yes, for at least half of the types of incidents', 'Yes, for most of the types of incidents'),
('O-IM-B-3-1', 'Incident Response', 3, 'Is there a dedicated incident response team available?', 'The team performs Root Cause Analysis for all security incidents unless there is a specific reason not to do so\r\nYou review and update the response process at least annually.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time');

-- --------------------------------------------------------

--
-- Table structure for table `operate_operational`
--

CREATE TABLE `operate_operational` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operate_operational`
--

INSERT INTO `operate_operational` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('O-OM-A-1-1', 'Data Protection', 1, 'Do you protect and handle information according to protection requirements for data stored and processed on each application?', 'You have identified the data elements processed and stored by each application\r\nYou have determined the type and sensitivity level of each identified data element\r\nYou have controls to prevent propagation of unsanitized sensitive data from production environments to lower environments.', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-OM-A-2-1', 'Data Protection', 2, 'Do you maintain a data catalog, including types, sensitivity levels, and processing and storage locations?', 'The data catalog is stored in an accessible location\r\nYou have identified data elements subject to specific regulation\r\nYou have controls for protecting and preserving data throughout their lifetime\r\nYou have retention requirements for data, and you destroy backups in a timely manner after the relevant retention period ends.', 'Yes, for some of our data', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some of our data', 'Yes, for at least half of our data', 'Yes, for most of our data'),
('O-OM-A-3-1', 'Data Protection', 3, 'Do you regularly review and update the data catalog and your data protection policies and procedures?', 'You have automated monitoring to detect attempted or actual violations of the Data Protection Policy\r\nYou have tools for data loss prevention, access control and tracking, or anomalous behavior detection\r\nYou periodically audit the operation of automated mechanisms, including backups and record deletions.', 'Yes, we do it at least annually', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, we do it when requested', 'Yes, we do it every few years', 'Yes, we do it at least annually'),
('O-OM-B-1-1', 'System decommissioning / Legacy management', 1, 'Do you identify and remove systems, applications, application dependencies, or services that are no longer used, have reached end of life, or are no longer actively developed or supported?', 'You do not use unsupported applications or dependencies\r\nYou manage customer/user migration from older versions for each product and customer/user group.', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('O-OM-B-2-1', 'System decommissioning / Legacy management', 2, 'Do you follow an established process for removing all associated resources, as part of decommissioning of unused systems, applications, application dependencies, or services?', 'You document the status of support for all released versions of your products, in an accessible location\r\nThe process includes replacement or upgrade of third-party applications, or application dependencies, that have reached end of life.\r\nOperating environments do not contain orphaned accounts, firewall rules, or other configuration artifacts.', 'Yes, some of the time', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of the time', 'Yes, at least half of the time', 'Yes, most of the time'),
('O-OM-B-3-1', 'System decommissioning / Legacy management', 3, 'Do you regularly evaluate the lifecycle state and support status of every software asset and underlying infrastructure component, and estimate their end-of-life?', 'Your end-of-life management process is agreed upon.\r\nYou inform customers and user groups of product timelines to prevent disruption of service or support.\r\nYou review the process at least annually.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some of the assets', 'Yes, for at least half of the assets', 'Yes, for most of the assets');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `projname` varchar(500) NOT NULL,
  `id` int(11) NOT NULL,
  `uname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`email`) VALUES
('abc@gmail.com'),
('abc@gmail.com'),
('abc@gmail.com'),
('aaa@gasf.cas');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`name`, `createdAt`, `updatedAt`, `id`) VALUES
('USER', '2020-03-08 12:09:09', '2020-03-08 12:09:09', 1),
('AUDITOR', '2020-03-08 12:09:09', '2020-03-08 12:09:09', 2),
('ADMIN', '2020-03-08 12:09:09', '2020-03-08 12:09:09', 3),
('USER', '2020-07-07 18:36:02', '2020-07-07 18:36:02', 1),
('AUDITOR', '2020-07-07 18:36:02', '2020-07-07 18:36:02', 2),
('ADMIN', '2020-07-07 18:36:02', '2020-07-07 18:36:02', 3),
('USER', '2020-07-07 18:37:13', '2020-07-07 18:37:13', 1),
('AUDITOR', '2020-07-07 18:37:13', '2020-07-07 18:37:13', 2),
('ADMIN', '2020-07-07 18:37:13', '2020-07-07 18:37:13', 3);

-- --------------------------------------------------------

--
-- Table structure for table `samm_master`
--

CREATE TABLE `samm_master` (
  `groupname` varchar(500) NOT NULL,
  `secpractice` varchar(500) NOT NULL,
  `mapped` varchar(500) NOT NULL,
  `score` double NOT NULL,
  `id` int(11) NOT NULL,
  `qname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `score_history`
--

CREATE TABLE `score_history` (
  `uname` varchar(500) DEFAULT NULL,
  `groupname` varchar(500) NOT NULL,
  `secpractice` varchar(500) NOT NULL,
  `score` float NOT NULL,
  `created` datetime NOT NULL,
  `qoid` varchar(11) NOT NULL,
  `qoname` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `scname` varchar(40) DEFAULT NULL,
  `auditor` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `score_history`
--

INSERT INTO `score_history` (`uname`, `groupname`, `secpractice`, `score`, `created`, `qoid`, `qoname`, `id`, `question`, `scname`, `auditor`) VALUES
(NULL, 'Governance', 'Strategy & Metrics', 1.38, '2020-03-07 00:00:00', 'G-SM-A-2-1', 'G-SM-A-2-1', 1, 'Do you have a strategic plan for application security that is used to make decisions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-07 17:57:44', 'D-TA-A-1-1', 'D-TA-A-1-1', 2, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0, '2020-03-07 18:13:12', 'D-TA-A-1-1', 'D-TA-A-1-1', 3, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Governance', 'Policy and Standards', 0.5, '2020-03-09 12:32:09', 'G-PC-B-1-1', 'G-PC-B-1-1', 4, 'Do you have a complete picture of your external compliance obligations?', NULL, NULL),
(NULL, 'Governance', 'Policy and Standards', 0, '2020-03-09 13:20:26', 'G-PC-B-3-1', 'G-PC-B-3-1', 5, 'Do you regularly report on adherence to external compliance obligations, and use that information to guide efforts to close compliance gaps?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:18:49', 'I-SD-A-1-1', 'I-SD-A-1-1', 6, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:24:28', 'I-SD-A-1-1', 'I-SD-A-1-1', 7, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:26:36', 'I-SD-A-1-1', 'I-SD-A-1-1', 8, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:29:40', 'I-SD-A-1-1', 'I-SD-A-1-1', 9, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:33:49', 'I-SD-A-1-1', 'I-SD-A-1-1', 10, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-10 12:37:00', 'I-SD-A-3-1', 'I-SD-A-3-1', 11, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:45:36', 'I-SD-A-1-1', 'I-SD-A-1-1', 12, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:47:41', 'I-SD-A-1-1', 'I-SD-A-1-1', 13, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:49:50', 'I-SD-A-1-1', 'I-SD-A-1-1', 14, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:51:27', 'I-SD-A-1-1', 'I-SD-A-1-1', 15, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.25, '2020-03-10 12:53:48', 'I-SD-A-2-1', 'I-SD-A-2-1', 16, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 12:54:41', 'I-SD-A-2-1', 'I-SD-A-2-1', 17, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:10:26', 'I-SD-A-1-1', 'I-SD-A-1-1', 18, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:14:53', 'I-SD-A-1-1', 'I-SD-A-1-1', 19, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:18:30', 'I-SD-A-1-1', 'I-SD-A-1-1', 20, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:18:41', 'I-SD-A-1-1', 'I-SD-A-1-1', 21, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:19:10', 'I-SD-A-1-1', 'I-SD-A-1-1', 22, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:20:32', 'I-SD-A-1-1', 'I-SD-A-1-1', 23, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:28:00', 'I-SD-A-1-1', 'I-SD-A-1-1', 24, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:29:55', 'I-SD-A-1-1', 'I-SD-A-1-1', 25, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-10 13:30:17', 'I-SD-A-1-1', 'I-SD-A-1-1', 26, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Design', 'Secure Build', 0, '2020-03-10 16:35:33', 'I-SB-A-3-1', 'I-SB-A-3-1', 27, 'Do you integrate automated security checks in build processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 11:39:56', 'I-SD-A-1-1', 'I-SD-A-1-1', 28, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 11:42:02', 'I-SD-A-3-1', 'I-SD-A-3-1', 29, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 11:46:06', 'I-SD-A-2-1', 'I-SD-A-2-1', 30, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 11:54:41', 'I-SD-A-1-1', 'I-SD-A-1-1', 31, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-11 11:56:50', 'I-SD-A-2-1', 'I-SD-A-2-1', 32, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 11:58:01', 'I-SD-A-2-1', 'I-SD-A-2-1', 33, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 11:58:25', 'I-SD-A-3-1', 'I-SD-A-3-1', 34, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 11:58:50', 'I-SD-B-1-1', 'I-SD-B-1-1', 35, 'Do you limit access to application secrets according to the need to know principle?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 11:59:11', 'I-SD-A-3-1', 'I-SD-A-3-1', 36, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 12:01:49', 'I-SD-B-1-1', 'I-SD-B-1-1', 37, 'Do you limit access to application secrets according to the need to know principle?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-11 12:02:14', 'I-SD-B-2-1', 'I-SD-B-2-1', 38, 'Do you minimize permanent storage of secrets in application artefacts, for instance by injecting them into the configuration using an automated process?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 12:04:09', 'I-SD-B-1-1', 'I-SD-B-1-1', 39, 'Do you limit access to application secrets according to the need to know principle?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.25, '2020-03-11 12:04:42', 'I-SD-B-3-1', 'I-SD-B-3-1', 40, 'Do you regenerate application secrets during deployment?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 12:06:09', 'I-SD-B-3-1', 'I-SD-B-3-1', 41, 'Do you regenerate application secrets during deployment?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.25, '2020-03-11 12:13:15', 'I-SD-B-2-1', 'I-SD-B-2-1', 42, 'Do you minimize permanent storage of secrets in application artefacts, for instance by injecting them into the configuration using an automated process?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 12:17:09', 'I-SD-A-3-1', 'I-SD-A-3-1', 43, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 12:18:11', 'I-SD-A-3-1', 'I-SD-A-3-1', 44, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 12:20:15', 'I-SD-A-1-1', 'I-SD-A-1-1', 45, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 12:21:26', 'I-SD-A-1-1', 'I-SD-A-1-1', 46, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-11 14:41:54', 'I-SD-A-1-1', 'I-SD-A-1-1', 47, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-11 14:42:17', 'I-SD-A-2-1', 'I-SD-A-2-1', 48, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-11 14:46:19', 'D-TA-A-3-1', 'D-TA-A-3-1', 49, 'Do you regularly review and update the risk profiles for your applications?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-11 14:46:49', 'D-TA-A-1-1', 'D-TA-A-1-1', 50, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0, '2020-03-11 14:55:32', 'D-TA-A-2-1', 'D-TA-A-2-1', 51, 'Are you using centralized and quantified application risk profiles to evaluate business risk?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 1, '2020-03-11 14:56:16', 'D-TA-A-1-1', 'D-TA-A-1-1', 52, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 1, '2020-03-11 15:03:26', 'D-TA-A-2-1', 'D-TA-A-2-1', 53, 'Are you using centralized and quantified application risk profiles to evaluate business risk?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0, '2020-03-11 15:03:59', 'D-TA-A-2-1', 'D-TA-A-2-1', 54, 'Are you using centralized and quantified application risk profiles to evaluate business risk?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.25, '2020-03-11 15:06:20', 'D-TA-A-2-1', 'D-TA-A-2-1', 55, 'Are you using centralized and quantified application risk profiles to evaluate business risk?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 1, '2020-03-11 15:06:45', 'D-TA-A-1-1', 'D-TA-A-1-1', 56, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-11 15:07:21', 'D-TA-A-1-1', 'D-TA-A-1-1', 57, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:19:35', 'I-SD-A-1-1', 'I-SD-A-1-1', 58, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-11 15:32:17', 'I-SD-A-1-1', 'I-SD-A-1-1', 59, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:32:39', 'I-SD-A-1-1', 'I-SD-A-1-1', 60, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-11 15:38:37', 'I-SD-A-1-1', 'I-SD-A-1-1', 61, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:39:53', 'I-SD-A-2-1', 'I-SD-A-2-1', 62, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-11 15:40:31', 'I-SD-A-2-1', 'I-SD-A-2-1', 63, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:42:29', 'I-SD-A-1-1', 'I-SD-A-1-1', 64, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:43:05', 'I-SD-B-1-1', 'I-SD-B-1-1', 65, 'Do you limit access to application secrets according to the need to know principle?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:44:27', 'I-SD-A-2-1', 'I-SD-A-2-1', 66, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-11 15:45:27', 'I-SD-B-3-1', 'I-SD-B-3-1', 67, 'Do you regenerate application secrets during deployment?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-11 18:19:21', 'D-TA-A-1-1', 'D-TA-A-1-1', 68, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-12 10:44:50', 'I-SD-A-1-1', 'I-SD-A-1-1', 69, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-12 10:54:03', 'I-SD-A-1-1', 'I-SD-A-1-1', 70, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 11:10:15', 'I-SD-A-1-1', 'I-SD-A-1-1', 71, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.25, '2020-03-12 11:20:39', 'I-SD-A-1-1', 'I-SD-A-1-1', 72, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-12 11:30:41', 'I-SD-A-1-1', 'I-SD-A-1-1', 73, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 11:31:06', 'I-SD-A-2-1', 'I-SD-A-2-1', 74, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 11:35:16', 'I-SD-A-1-1', 'I-SD-A-1-1', 75, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 11:35:37', 'I-SD-A-1-1', 'I-SD-A-1-1', 76, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-12 11:38:15', 'I-SD-A-1-1', 'I-SD-A-1-1', 77, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-12 11:38:37', 'I-SD-B-2-1', 'I-SD-B-2-1', 78, 'Do you minimize permanent storage of secrets in application artefacts, for instance by injecting them into the configuration using an automated process?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 11:38:58', 'I-SD-A-1-1', 'I-SD-A-1-1', 79, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-12 12:15:34', 'I-SD-A-1-1', 'I-SD-A-1-1', 80, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 12:19:14', 'I-SD-A-1-1', 'I-SD-A-1-1', 81, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-12 12:19:42', 'I-SD-B-3-1', 'I-SD-B-3-1', 82, 'Do you regenerate application secrets during deployment?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-12 12:20:46', 'I-SD-A-3-1', 'I-SD-A-3-1', 83, 'Do you consistently validate the integrity of deployed artifacts?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 1, '2020-03-12 12:22:39', 'I-SD-A-2-1', 'I-SD-A-2-1', 84, 'Are deployment processes automated and taking into account security?', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.25, '2020-03-12 12:24:33', 'I-SD-A-1-1', 'I-SD-A-1-1', 85, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 12:27:54', 'I-SD-A-1-1', 'I-SD-A-1-1', 86, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0, '2020-03-12 12:41:28', 'I-SD-A-1-1', 'I-SD-A-1-1', 87, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Defect Management', 0, '2020-03-12 12:50:59', 'I-DM-A-1-1', 'I-DM-A-1-1', 88, 'Do you track all known security defects in a central location per defined scope?', NULL, NULL),
(NULL, 'Implementation', 'Defect Management', 0.5, '2020-03-12 12:51:34', 'I-DM-A-1-1', 'I-DM-A-1-1', 89, 'Do you track all known security defects in a central location per defined scope?', NULL, NULL),
(NULL, 'Implementation', 'Defect Management', 0.5, '2020-03-12 12:53:01', 'I-DM-A-1-1', 'I-DM-A-1-1', 90, 'Do you track all known security defects in a central location per defined scope?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0, '2020-03-12 14:54:25', 'D-TA-A-1-1', 'D-TA-A-1-1', 91, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 1, '2020-03-12 14:58:09', 'D-TA-A-1-1', 'D-TA-A-1-1', 92, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-12 15:08:10', 'D-TA-A-2-1', 'D-TA-A-2-1', 93, 'Are you using centralized and quantified application risk profiles to evaluate business risk?\r\n', NULL, NULL),
(NULL, 'Governance', 'Strategy & Metrics', 1, '2020-03-12 15:09:04', 'G-SM-B-1-1', 'G-SM-B-1-1', 94, 'Are you using a set of metrics to measure the effectiveness and efficiency of the application security program across applications?\r\n', NULL, NULL),
(NULL, 'Governance', 'Strategy & Metrics', 0.5, '2020-03-12 15:12:51', 'G-SM-A-1-1', 'G-SM-A-1-1', 95, 'Has the organization defined a set of risks by which applications could be prioritized?\r\n', NULL, NULL),
(NULL, 'Governance', 'Strategy & Metrics', 0.5, '2020-03-12 15:13:23', 'G-SM-A-1-1', 'G-SM-A-1-1', 96, 'Has the organization defined a set of risks by which applications could be prioritized?\r\n', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 1, '2020-03-12 15:20:18', 'G-EG-B-2-1', 'G-EG-B-2-1', 97, 'Does the organization have a Secure Software Center of Excellence (SSCE)?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0, '2020-03-12 15:21:52', 'G-EG-B-2-1', 'G-EG-B-2-1', 98, 'Does the organization have a Secure Software Center of Excellence (SSCE)?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0.5, '2020-03-12 15:22:50', 'G-EG-A-3-1', 'G-EG-A-3-1', 99, 'Have you implemented a Learning Management System or equivalent to track employee training / certification processes?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0, '2020-03-12 15:23:31', 'G-EG-A-3-1', 'G-EG-A-3-1', 100, 'Have you implemented a Learning Management System or equivalent to track employee training / certification processes?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 1, '2020-03-12 15:24:47', 'G-EG-B-3-1', 'G-EG-B-3-1', 101, 'Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0, '2020-03-12 15:25:12', 'G-EG-A-1-1', 'G-EG-A-1-1', 102, 'Do you require employees involved with application development to take SDLC training?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 1, '2020-03-12 15:25:47', 'G-EG-B-3-1', 'G-EG-B-3-1', 103, 'Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0, '2020-03-12 15:29:04', 'G-EG-B-1-1', 'G-EG-B-1-1', 104, 'Have you identified a Security Champion for each development team?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0, '2020-03-12 15:29:34', 'G-EG-B-1-1', 'G-EG-B-1-1', 105, 'Have you identified a Security Champion for each development team?', NULL, NULL),
(NULL, 'Design', 'Security Requirements', 0.25, '2020-03-12 15:30:36', 'D-SR-A-1-1', 'D-SR-A-1-1', 106, 'Do project teams specify security requirements during development?\r\n', NULL, NULL),
(NULL, 'Design', 'Security Requirements', 0.25, '2020-03-12 15:32:03', 'D-SR-A-1-1', 'D-SR-A-1-1', 107, 'Do project teams specify security requirements during development?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-12 15:33:12', 'D-TA-A-1-1', 'D-TA-A-1-1', 108, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 1, '2020-03-12 15:33:55', 'D-TA-B-1-1', 'D-TA-B-1-1', 109, 'Are you evaluating the technical architecture of your applications for potential threats?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Build', 0.25, '2020-03-12 15:41:00', 'I-SB-A-3-1', 'I-SB-A-3-1', 110, 'Do you integrate automated security checks in build processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Build', 0, '2020-03-12 15:41:37', 'I-SB-A-1-1', 'I-SB-A-1-1', 111, 'Do you use repeatable build processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Secure Deployment', 0.5, '2020-03-12 15:42:46', 'I-SD-A-1-1', 'I-SD-A-1-1', 112, 'Do you use repeatable deployment processes?\r\n', NULL, NULL),
(NULL, 'Implementation', 'Defect Management', 0.5, '2020-03-12 15:43:58', 'I-DM-A-3-1', 'I-DM-A-3-1', 113, 'Does independent security staff enforce the defined threshold?', NULL, NULL),
(NULL, 'Verification', 'Architecture Assessment', 0.25, '2020-03-12 15:47:17', 'V-AA-B-1-1', 'V-AA-B-1-1', 114, 'Do you review the architecture against compliance requirements?', NULL, NULL),
(NULL, 'Verification', 'Architecture Assessment', 0.5, '2020-03-12 15:48:50', 'V-AA-B-1-1', 'V-AA-B-1-1', 115, 'Do you review the architecture against compliance requirements?', NULL, NULL),
(NULL, 'Verification', 'Architecture Assessment', 0.25, '2020-03-12 15:52:57', 'V-AA-B-1-1', 'V-AA-B-1-1', 116, 'Do you review the architecture against compliance requirements?', NULL, NULL),
(NULL, 'Verification', 'Requirements Driven Testing', 0.5, '2020-03-12 15:55:17', 'V-RT-A-1-1', 'V-RT-A-1-1', 117, 'Do you test applications for the correct functioning of standard security controls?', NULL, NULL),
(NULL, 'Verification', 'Security Testing', 0, '2020-03-12 15:56:16', 'V-ST-B-2-1', 'V-ST-B-2-1', 118, 'Do you perform penetration testing for your applications at regular intervals?', NULL, NULL),
(NULL, 'Operations', 'Incident Management', 1, '2020-03-12 15:57:07', 'O-IM-A-1-1', 'O-IM-A-1-1', 119, 'Do you analyze log data for possible security incidents periodically?', NULL, NULL),
(NULL, 'Operations', 'Environment Management', 0.5, '2020-03-12 15:58:40', 'O-EM-B-1-1', 'O-EM-B-1-1', 120, 'Do you identify and patch vulnerable components?', NULL, NULL),
(NULL, 'Operations', 'Environment Management', 0.25, '2020-03-12 15:59:04', 'O-EM-A-2-1', 'O-EM-A-2-1', 121, 'Do you follow a process for incident detection?Do you maintain hardening baselines for your components?', NULL, NULL),
(NULL, 'Operations', 'Operational Management', 0.5, '2020-03-12 15:59:58', 'O-OM-A-3-1', 'O-OM-A-3-1', 122, 'Do you regularly review and update the data catalog and your data protection policies and procedures?', NULL, NULL),
(NULL, 'Operations', 'Operational Management', 1, '2020-03-12 16:01:09', 'O-OM-A-3-1', 'O-OM-A-3-1', 123, 'Do you regularly review and update the data catalog and your data protection policies and procedures?', NULL, NULL),
(NULL, 'Design', 'Security Requirements', 1, '2020-03-12 16:02:32', 'D-SR-A-1-1', 'D-SR-A-1-1', 124, 'Do project teams specify security requirements during development?\r\n', NULL, NULL),
(NULL, 'Design', 'Secure Architecture', 0.5, '2020-03-12 16:03:25', 'D-SA-A-3-1', 'D-SA-A-3-1', 125, 'Do you base your design on available reference architectures?\r\n', NULL, NULL),
(NULL, 'Governance', 'Strategy & Metrics', 0.25, '2020-03-12 16:04:26', 'G-SM-A-1-1', 'G-SM-A-1-1', 126, 'Has the organization defined a set of risks by which applications could be prioritized?\r\n', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0.5, '2020-03-12 16:05:51', 'G-EG-B-2-1', 'G-EG-B-2-1', 127, 'Does the organization have a Secure Software Center of Excellence (SSCE)?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 0.5, '2020-03-12 16:27:35', 'G-EG-B-1-1', 'G-EG-B-1-1', 128, 'Have you identified a Security Champion for each development team?', NULL, NULL),
(NULL, 'Governance', 'Education & Guidance', 1, '2020-03-12 16:28:44', 'G-EG-B-1-1', 'G-EG-B-1-1', 129, 'Have you identified a Security Champion for each development team?', NULL, NULL),
(NULL, 'Design', 'Secure Architecture', 0.5, '2020-03-13 15:10:06', 'D-SA-A-1-1', 'D-SA-A-1-1', 130, 'Do teams use security principles during design?\r\n', NULL, NULL),
(NULL, 'Design', 'Secure Architecture', 1, '2020-03-13 15:15:04', 'D-SA-A-1-1', 'D-SA-A-1-1', 131, 'Do teams use security principles during design?\r\n', NULL, NULL),
(NULL, 'Design', 'Threat Assessment', 0.5, '2020-03-14 18:55:25', 'D-TA-A-1-1', 'D-TA-A-1-1', 132, 'Are you classifying applications according to business risk based on a simple, but predefined set of questions?', NULL, NULL),
(NULL, 'Governance', 'Policy & Compliance', 0, '2020-03-14 22:45:43', 'G-PC-B-1-1', 'G-PC-B-1-1', 133, 'Do you have a complete picture of your external compliance obligations?', NULL, NULL),
(NULL, 'Governance', 'Policy & Compliance', 1, '2020-03-14 22:49:57', 'G-PC-B-1-1', 'G-PC-B-1-1', 134, 'Do you have a complete picture of your external compliance obligations?', NULL, NULL),
(NULL, 'Governance', 'Strategy & Metrics', 1, '2020-03-15 14:51:09', 'G-SM-A-1-1', 'G-SM-A-1-1', 135, 'Has the organization defined a set of risks by which applications could be prioritized?\r\n', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `groupname` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `empid` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `lname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `mobile`, `role`, `country`, `groupname`, `company`, `empid`, `createdAt`, `updatedAt`, `lname`) VALUES
(6, 'SAMM', 'User', 'user@gmail.com', '$2a$08$JHWl9.S1PWv2E/4Veu8GSOJZ9d1taA6oFLBea6eiYckRQZ/ocncZG', 2147483647, 'User', NULL, NULL, NULL, NULL, '2020-03-08 16:48:08', '2020-03-08 16:48:08', 'User'),
(8, 'SAMM', 'Auditor', 'auditor@gmail.com', '$2a$08$2vGK0q9x5Q90QvQL.c7VeOfmIWUt3ilHQWmlqhDqU98UaucAnYnXa', 1234567890, 'Auditor', NULL, NULL, NULL, NULL, '2020-03-08 17:24:25', '2020-03-08 17:24:25', 'Auditor'),
(9, 'SAMM', 'Admin', 'admin@gmail.com', '$2a$08$oE4xN2yN2yhD1/89qWrCwex2.yuppwKwhnP0fcr.4Q7ZHgjZ4OC3O', 1234567890, 'Admin', NULL, NULL, NULL, NULL, '2020-03-09 05:45:33', '2020-03-09 05:45:33', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `user_manages`
--

CREATE TABLE `user_manages` (
  `firstname` varchar(500) NOT NULL,
  `empid` int(10) NOT NULL,
  `email` varchar(500) NOT NULL,
  `role` varchar(200) NOT NULL,
  `groupname` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `country` varchar(500) NOT NULL,
  `company` varchar(500) NOT NULL,
  `id` int(200) NOT NULL,
  `project` varchar(500) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `sessid` varchar(500) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `recovery_key` int(10) NOT NULL,
  `lastname` varchar(500) NOT NULL,
  `midname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2020-03-08 16:48:08', '2020-03-08 16:48:08', 1, 6),
('2020-03-08 17:24:25', '2020-03-08 17:24:25', 2, 8),
('2020-03-09 05:45:33', '2020-03-09 05:45:33', 3, 9);

-- --------------------------------------------------------

--
-- Table structure for table `verify_arch`
--

CREATE TABLE `verify_arch` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `verify_arch`
--

INSERT INTO `verify_arch` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('V-AA-A-1-1', 'Architecture Validation', 1, 'Do you review the application architecture for key security objectives and threats on an ad-hoc basis?', 'You have an agreed upon model of the overall software architecture\r\nYou include components, interfaces, and integrations in the architecture model\r\nYou verify the security controls in the software architecture cover the key security objectives and threats\r\nYou log missing security controls as defects.', 'Yes, for most of the applications\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('V-AA-A-2-1', 'Architecture Validation', 2, 'Do you thoroughly review your software architecture regularly using an agreed upon methodology?', 'Your process and template for reviewing software architectures is aligned with your organization\'s risk tolerance\r\nYou verify the architecture meets all the defined security requirements\r\nYou verify every component is protected by the expected security controls (e.g., authentication, authorization, logging)\r\nYou log missing security controls as defects.', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('V-AA-A-3-1', 'Architecture Validation', 3, 'Do you regularly review the effectiveness of the security controls?', 'You evaluate the preventive, detective and response capabilities of security controls\r\nYou evaluate the strategy alignment, appropriate support, and scalability of security controls\r\nYou evaluate the effectiveness at least yearly\r\nYou log identified shortcomings as defects.', 'Yes, for at least half of the applications', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, for some applications', 'Yes, for at least half of the applications', 'Yes, for most of the applications'),
('V-AA-B-1-1', 'Architecture Compliance', 1, 'Do you review the architecture against compliance requirements?', 'You indicate which design-level feature(s) address each compliance requirement.\r\nThe analysis is conducted by security-savvy staff with input from architects, and other stakeholders.\r\nYou record all missing compliance requirements and handle them following organisational risk management.', 'Yes, some of them', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-AA-B-2-1', 'Architecture Compliance', 2, 'Do you analyze the architecture against known security requirements and best practices ?', 'You identify any security assumptions underpinning the safe operation of the system.\r\nYou indicate which design-level feature(s) address each security requirement.\r\nYou record all unsatisfied security requirements and handle them following organisational risk management.', 'Yes, the most of them', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-AA-B-3-1', 'Architecture Compliance', 3, 'Do you feed architecture review results back into the enterprise architecture?', 'You map the security features to security compliance requirements\r\nYou identify the cause of gaps in the mapping and handle them following organisational risk management.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them');

-- --------------------------------------------------------

--
-- Table structure for table `verify_requirement`
--

CREATE TABLE `verify_requirement` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `verify_requirement`
--

INSERT INTO `verify_requirement` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('V-RT-A-1-1', 'Control Verification', 1, 'Do you test applications for the correct functioning of standard security controls?', 'Security testing at least verifies the implementation of authentication, access control, input validation, encoding and escaping data, and encryption controls.\r\nSecurity testing executes whenever the application changes its use of the controls.', 'Yes, at least half of them', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-RT-A-2-1', 'Control Verification', 2, 'Do you test security controls based on the specific application security requirements?', 'Tests are tailored to each application and assert expected security functionality.\r\nTest results are captured as a pass or fail condition.', 'Yes, at least half of them', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-RT-A-3-1', 'Control Verification', 3, 'Do you automatically test applications for security regressions?', 'Tests are consistently written for all identified bugs (possibly exceeding a pre-defined severity threshhold)\r\nSecurity tests are collected in a test suite that is part of the existing unit testing framework.', 'Yes, some of them', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-RT-B-1-1', 'Misuse/Abuse Testing', 1, 'Do you test applications using randomization techniques?', 'Testing covers most or all of the application\'s main input parameters\r\nAll application crashes are recorded and systematically inspected for security impact.', 'Yes, the most of them', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-RT-B-2-1', 'Misuse/Abuse Testing', 2, 'Do you create abuse cases from functional requirements and use them to drive security tests?', 'Important business functionality has corresponding abuse cases\r\nYou build abuse stories around relevant personas with well-defined motivations and characteristics\r\nYou capture identified weaknesses as security requirements.', 'Yes, some of the time', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-RT-B-3-1', 'Misuse/Abuse Testing', 3, 'Do you perform denial of service and security stress testing?', 'Stress tests target specific application resources (e.g. memory exhaustion by saving large amounts of data to a user session)\r\nYou design tests around relevant personas with well-defined capabilities (knowledge, resources)', 'Yes, some of the time', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them');

-- --------------------------------------------------------

--
-- Table structure for table `verify_security`
--

CREATE TABLE `verify_security` (
  `vsamm_id` varchar(10) NOT NULL,
  `stream` varchar(100) NOT NULL,
  `maturity_level` int(20) NOT NULL,
  `question` text DEFAULT NULL,
  `description` text NOT NULL,
  `answer` varchar(200) NOT NULL,
  `status` float DEFAULT NULL,
  `user` varchar(10) DEFAULT NULL,
  `auditor` varchar(10) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `commentor` text DEFAULT NULL,
  `upload` varchar(10) DEFAULT NULL,
  `findings` varchar(20) DEFAULT NULL,
  `recommendations` varchar(30) DEFAULT NULL,
  `documents reviewed` varchar(30) DEFAULT NULL,
  `filename` varchar(11) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `verify_security`
--

INSERT INTO `verify_security` (`vsamm_id`, `stream`, `maturity_level`, `question`, `description`, `answer`, `status`, `user`, `auditor`, `comment`, `commentor`, `upload`, `findings`, `recommendations`, `documents reviewed`, `filename`, `ans1`, `ans2`, `ans3`, `ans4`) VALUES
('V-ST-A-1-1', 'Scalable Baseline', 1, 'Do you scan applications with automated security testing tools?', 'Inputs for security tests are dynamically generated using automated tools.\r\nThe security testing tools are chosen to fit the organization\'s architecture and technology stack, and balances depth and accuracy of inspection with usability of findings to the organization.', 'Yes, the most of them', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-ST-A-2-1', 'Scalable Baseline', 2, 'Do you verify business logic with automated security tests, created from application security requirements?', 'Tests are specifically customized for software interfaces in the project.\r\nTests and the security requirements they verify are expressed in a structured format, such as a DSL.\r\nTests include organization-specific technical standards and compliance concerns.', 'Yes, the most of them\r\n', 1, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-ST-A-3-1', 'Scalable Baseline', 3, 'Do you integrate automated security testing into the build and deploy process?', 'Test results are tracked and reviewed by management and business stakeholders throughout the development cycle\r\nTests results are merged into a central dashboard and fed into defect management.', 'Yes, at least half of them', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-ST-B-1-1', 'Deep Understanding', 1, 'Do you manually review the security quality of selected high-risk components?', 'Criteria exist to help the reviewer to focus on high-risk components\r\nReviews are conducted by qualified personel following documented guidelines\r\nfindings are addressed in accordance with the organisation\'s defect management policy.', 'Yes, at least half of them', 0.5, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-ST-B-2-1', 'Deep Understanding', 2, 'Do you perform penetration testing for your applications at regular intervals?', 'Penetration testing uses application-specific security test cases to evaluate security\r\nPenetration testing looks for both technical and logical issues in the application\r\nStakeholders review the test results and handle them in accordance with the organisation\'s risk management\r\nPenetration testing is performed by qualified personel.', 'No', 0, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them'),
('V-ST-B-3-1', 'Deep Understanding', 3, 'Do you use the results of security testing to improve the development lifecycle?', 'You use results from other security activities to improve integrated security testing during development\r\nYou review test results and incorporate them into security awareness training and security testing playbooks\r\nStakeholders review the test results and handle them in accordance with the organisation\'s risk management.', 'Yes, some of the time', 0.25, '', '', '', '', '', '', '', '', '', 'No', 'Yes, some of them', 'Yes, at least half of them', 'Yes, the most of them');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `check_tab`
--
ALTER TABLE `check_tab`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `comment_history`
--
ALTER TABLE `comment_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `design_secure_arch`
--
ALTER TABLE `design_secure_arch`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `design_security`
--
ALTER TABLE `design_security`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `design_threat`
--
ALTER TABLE `design_threat`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `governance_education`
--
ALTER TABLE `governance_education`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `governance_policy`
--
ALTER TABLE `governance_policy`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `governance_strategy`
--
ALTER TABLE `governance_strategy`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `implement_defect`
--
ALTER TABLE `implement_defect`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `implement_secure_build`
--
ALTER TABLE `implement_secure_build`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `implement_secure_deploy`
--
ALTER TABLE `implement_secure_deploy`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `operate_environment`
--
ALTER TABLE `operate_environment`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `operate_incident`
--
ALTER TABLE `operate_incident`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `operate_operational`
--
ALTER TABLE `operate_operational`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `score_history`
--
ALTER TABLE `score_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `verify_arch`
--
ALTER TABLE `verify_arch`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `verify_requirement`
--
ALTER TABLE `verify_requirement`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- Indexes for table `verify_security`
--
ALTER TABLE `verify_security`
  ADD PRIMARY KEY (`vsamm_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment_history`
--
ALTER TABLE `comment_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `score_history`
--
ALTER TABLE `score_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role_copy` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
