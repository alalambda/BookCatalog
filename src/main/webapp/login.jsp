<%--
  Created by IntelliJ IDEA.
  User: anna.timoskina
  Date: 1/21/2016
  Time: 8:49 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
<head>
    <title>Spring MVC Exception Handling</title>
</head>

<body>
<h2><spring:message code="label.login.header"/></h2>

<form:form method="POST" modelAttribute="user" action="doLogin">
    <table>

        <tr>
            <td><spring:message code="label.userName"/></td>
            <td><form:input path="userName" /></td>
        </tr>

        <tr>
            <td><spring:message code="label.password"/></td>
            <td><form:password path="password"  showPassword="true"/></td>
        </tr>

        <tr>
            <td><input type="submit" name="submit" value=<spring:message code="label.login.submit"/>></td>
        </tr>
    </table>
</form:form>

</body>
</html>