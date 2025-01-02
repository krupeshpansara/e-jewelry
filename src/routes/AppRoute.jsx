import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "pages/Layout";
import Dashboard from "pages/Dashboard";
import UsersManagement from "pages/UsersManagement";
import PaymentSettings from "pages/PaymentSettings";
import SubscriberDetails from "pages/SubscriberDetails";
import InboxAndNotification from "@/pages/InboxAndNotification";
import PoliciesAndGuidance from "@/pages/PoliciesAndGuidance";
import Chats from "@/pages/Chats";
import Bar from "@/pages/Bar";
import APIkeys from "@/pages/APIkeys";
import ErrorLogs from "@/pages/ErrorLogs";
import Notifications from "@/pages/Notifications";
import Announcements from "@/pages/Announcements";
import SupportTickets from "@/pages/SupportTickets";
import Courses from "@/pages/admin/Courses";
import CourseDetail from "@/pages/admin/Courses/CourseDetail";
import CourseBuilderDetail from "@/pages/admin/Courses/CourseBuilder/CourseBuilderDetail";
import Iqv from "@/pages/admin/IQV";
import IqvWorkflowsDetail from "@/pages/admin/IQV/IqvWorkflows/IqvWorkflowsDetail";
import IqvBuilderDetail from "@/pages/admin/IQV/IqvBuilder/IqvBuilderDetail";
import WebsiteSettings from "@/pages/WebsiteSettings";
import PublishedIqvDetail from "@/pages/admin/IQV/PublishedIqv/PublishedIqvDetail";
import ITIPage from "@/pages/admin/ITI";
import ITIWorkflowDetail from "@/pages/admin/ITI/ITIWorkflows/ITIWorkflowDetail";
import ITIBuilderDetail from "@/pages/admin/ITI/ITIBuilder/ITIBuilderDetail";
import OngoingITIDetail from "@/pages/admin/ITI/OngoingITI/OngoingITIDetail";
import CompletedITIDetail from "@/pages/admin/ITI/CompletedITI/CompletedITIDetail";

const AppRoute = () => {
  const routeList = [
    {
      path: "/console/dashboard",
      component: <Dashboard />,
    },
    {
      path: "/console/users-management/:type",
      component: <UsersManagement />,
    },
    {
      path: "/console/payment-settings/:type",
      component: <PaymentSettings />,
    },
    {
      path: "/console/users-management/subscriber-accounts/:user_id",
      component: <SubscriberDetails />,
    },
    {
      path: "/console/users-management/suspended-users/:user_id",
      component: <SubscriberDetails />,
    },
    {
      path: "/console/inbox",
      component: <InboxAndNotification />,
    },
    {
      path: "/console/policies-and-guidance/:type",
      component: <PoliciesAndGuidance />,
    },
    {
      path: "/console/chats",
      component: <Chats />,
    },
    {
      path: "/console/bar",
      component: <Bar />,
    },
    {
      path: "/console/api-keys",
      component: <APIkeys />,
    },
    {
      path: "/console/error-logs",
      component: <ErrorLogs />,
    },
    {
      path: "/console/notifications",
      component: <Notifications />,
    },
    {
      path: "/console/announcements",
      component: <Announcements />,
    },
    {
      path: "/console/support-tickets",
      component: <SupportTickets />,
    },
    {
      path: "/console/courses/:type",
      component: <Courses />,
    },

    {
      path: "/console/courses/detail/:id/:type",
      component: <CourseDetail />,
    },
    {
      path: "/console/courses/course-builder-detail/:id",
      component: <CourseBuilderDetail />,
    },
    {
      path: "/console/iqv/:type",
      component: <Iqv />,
    },
    {
      path: "/console/iqv/iqv-workflows/:id",
      component: <IqvWorkflowsDetail />,
    },
    {
      path: "/console/iqv/iqv-builder/:id",
      component: <IqvBuilderDetail />,
    },
    {
      path: "/console/website-settings/:type",
      component: <WebsiteSettings />,
    },
    {
      path: "/console/iqv/published-iqv/:id",
      component: <PublishedIqvDetail />,
    },
    {
      path: "/console/iti/:type",
      component: <ITIPage />,
    },
    {
      path: "/console/iti/iti-workflows/:id",
      component: <ITIWorkflowDetail />,
    },
    {
      path: "/console/iti/iti-builder/:id",
      component: <ITIBuilderDetail />,
    },
    {
      path: "/console/iti/ongoing-iti/:id",
      component: <OngoingITIDetail />,
    },
    {
      path: "/console/iti/completed-iti/:id",
      component: <CompletedITIDetail />,
    },
  ];
  return (
    <Routes>
      {routeList?.map((elm, index) => {
        return (
          <Route
            key={index}
            path={elm.path}
            element={<Layout>{elm.component}</Layout>}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/console/dashboard" />} />
    </Routes>
  );
};

export default AppRoute;
