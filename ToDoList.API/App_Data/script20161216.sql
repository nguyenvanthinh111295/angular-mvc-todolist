USE [master]
GO
/****** Object:  Database [ToDoList]    Script Date: 12/16/2016 4:04:45 PM ******/
CREATE DATABASE [ToDoList]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ToDoList', FILENAME = N'C:\Users\KNguyen04.VIETNAM\ToDoList.mdf' , SIZE = 3264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ToDoList_log', FILENAME = N'C:\Users\KNguyen04.VIETNAM\ToDoList_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ToDoList].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ToDoList] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ToDoList] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ToDoList] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ToDoList] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ToDoList] SET ARITHABORT OFF 
GO
ALTER DATABASE [ToDoList] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ToDoList] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [ToDoList] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ToDoList] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ToDoList] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ToDoList] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ToDoList] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ToDoList] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ToDoList] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ToDoList] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ToDoList] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ToDoList] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ToDoList] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ToDoList] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ToDoList] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ToDoList] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ToDoList] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ToDoList] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ToDoList] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ToDoList] SET  MULTI_USER 
GO
ALTER DATABASE [ToDoList] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ToDoList] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ToDoList] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ToDoList] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [ToDoList]
GO
/****** Object:  Table [dbo].[Item]    Script Date: 12/16/2016 4:04:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Item](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[Content] [nvarchar](max) NULL,
	[LabelId] [int] NOT NULL,
	[SoftDelete] [bit] NOT NULL,
	[Color] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Label]    Script Date: 12/16/2016 4:04:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Label](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Item] ON 

INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (16, N'Tour of Heroes: the vision', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 83, 0, N'255, 138, 128')
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (17, N'Old Stuff', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 83, 0, N'255, 209, 128')
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (19, N'I''m learning Angular 2, And you ?', N'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy ', 83, 0, N'255, 255, 141')
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (27, N'sdasdasd', N'asdasdasd', 83, 1, NULL)
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (29, N'We don''t talk any more !', N'bla bla bla', 136, 1, NULL)
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (30, N'bbbbb', N'zzzzzzz', 136, 1, NULL)
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (31, N'sfsdf', N'sdfsdfsd', 136, 1, NULL)
INSERT [dbo].[Item] ([Id], [Name], [Content], [LabelId], [SoftDelete], [Color]) VALUES (32, N'Default color', N'This is default color of Items', 83, 0, NULL)
SET IDENTITY_INSERT [dbo].[Item] OFF
SET IDENTITY_INSERT [dbo].[Label] ON 

INSERT [dbo].[Label] ([Id], [Name]) VALUES (83, N'Testing')
INSERT [dbo].[Label] ([Id], [Name]) VALUES (136, N'AbcXyz')
SET IDENTITY_INSERT [dbo].[Label] OFF
USE [master]
GO
ALTER DATABASE [ToDoList] SET  READ_WRITE 
GO
