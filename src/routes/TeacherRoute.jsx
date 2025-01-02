import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "pages/Layout";
import Dashboard from "pages/Teacher/Dashboard";
import IQV from "pages/Teacher/IQV";
import IQVWorkflowDetail from "pages/Teacher/IQV/IQVWorkflows/IQVWorkflowDetail";
import PublishedIQVDetail from "pages/Teacher/IQV/PublishedIQV/PublishedIQVDetail";
import ITI from "pages/Teacher/ITI";
import CompletedITIDetail from "pages/Teacher/ITI/CompletedITI/CompletedITIDetail";
import OngoingITIDetail from "pages/Teacher/ITI/OngoingITI/OngoingITIDetail";
import ITIWorkflowDetail from "pages/Teacher/ITI/ITIWorkflows/ITIWorkflowDetail";
import StudentActivity from "pages/Teacher/Dashboard/StudentActivity";
import StudentDetails from "pages/Teacher/Dashboard/StudentDetails";
import Courses from "pages/Teacher/Courses";
import CourseWorkflowDetail from "pages/Teacher/Courses/CourseWorkflows/CourseWorkflowDetail";
import PublishedCoursesDetail from "pages/Teacher/Courses/PublishedCourses/PublishedCoursesDetail";
import ContentLibrary from "pages/Teacher/ContentLibrary";
import Chats from "pages/Teacher/Chats";
import Bar from "pages/Teacher/Bar";
import Announcements from "pages/Teacher/Announcements";
import Notifications from "pages/Teacher/Notifications";
import PoliciesAndGuidance from "pages/Teacher/PoliciesAndGuidance";
import MyProfile from "pages/Teacher/MyProfile";
import EditProfile from "pages/Teacher/EditProfile";
import SupportTickets from "pages/Teacher/SupportTickets";

const TeacherRoute = () => {
  const routeList = [
    {
      path: "/teacher/dashboard",
      component: <Dashboard />,
    },
    {
      path: "/teacher/iqv/:type",
      component: <IQV />,
    },
    {
      path: "/teacher/iqv/iqv-workflows/:id",
      component: <IQVWorkflowDetail />,
    },
    {
      path: "/teacher/iqv/published-iqv/:id",
      component: <PublishedIQVDetail />,
    },
    {
      path: "/teacher/iti/:type",
      component: <ITI />,
    },
    {
      path: "/teacher/iti/completed-iti/:id",
      component: <CompletedITIDetail />,
    },
    {
      path: "/teacher/iti/ongoing-iti/:id",
      component: <OngoingITIDetail />,
    },
    {
      path: "/teacher/iti/iti-workflows/:id",
      component: <ITIWorkflowDetail />,
    },
    {
      path: "/teacher/dashboard/student-activity",
      component: <StudentActivity />,
    },
    {
      path: "/teacher/dashboard/student-details/:id",
      component: <StudentDetails />,
    },
    {
      path: "/teacher/courses/:type",
      component: <Courses />,
    },
    {
      path: "/teacher/courses/course-workflows/:id",
      component: <CourseWorkflowDetail />,
    },
    {
      path: "/teacher/courses/published-courses/:id",
      component: <PublishedCoursesDetail />,
    },
    {
      path: "/teacher/content-library",
      component: <ContentLibrary />,
    },
    {
      path: "/teacher/chats",
      component: <Chats />,
    },
    {
      path: "/teacher/bar",
      component: <Bar />,
    },
    {
      path: "/teacher/announcements",
      component: <Announcements />,
    },
    {
      path: "/teacher/notifications",
      component: <Notifications />,
    },
    {
      path: "/teacher/policies-and-guidance/:type",
      component: <PoliciesAndGuidance />,
    },
    {
      path: "/teacher/my-profile",
      component: <MyProfile />,
    },
    {
      path: "/teacher/edit-profile",
      component: <EditProfile />,
    },
    {
      path: "/teacher/support-tickets",
      component: <SupportTickets />,
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
      <Route path="*" element={<Navigate to="/teacher/dashboard" />} />
    </Routes>
  );
};

export default TeacherRoute;
