<%--
  Created by IntelliJ IDEA.
  User: anna.timoskina
  Date: 1/21/2016
  Time: 8:50 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title><spring:message code="login.success.title"/></title>
</head>
<body>
<div align="center">
    <h2><spring:message code="login.success.welcome" arguments="${user.userName}"/></h2>
</div>
</body>
</html>