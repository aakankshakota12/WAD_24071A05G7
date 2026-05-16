import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RentalServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<h1>Servlet Working Successfully</h1>");
    }

    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
                       throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        int days = Integer.parseInt(request.getParameter("days"));

        int total = days * 500;

        out.println("<h2>Rental Bill</h2>");
        out.println("Customer Name: " + name + "<br>");
        out.println("Days: " + days + "<br>");
        out.println("Total Rent: Rs." + total);
        out.println("\nCopyright 2026 | Roll No: 24071A05G7");
    }
}