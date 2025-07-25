// src/routes.js

// ⭐ 1. استيراد المكون الجديد
import ManageDiscounts from "layouts/ManageDiscounts";

// --- باقي الاستيرادات كما هي ---
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import ManagePlans from "layouts/ManagePlans";
import PaymentsTable from "layouts/PaymentsTable";
import IncomingTransactions from "layouts/incomingTransactions";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import ChatbotSettings from "layouts/ChatbotSettings";
import Users from "layouts/users";
import Broadcasts from "layouts/broadcasts";
import ChannelAudit from "layouts/channelAudit";

// Material UI Icon component
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Manage Plans",
    key: "ManagePlans",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/ManagePlans",
    component: <ManagePlans />,
  },
  // ⭐ 2. إضافة المسار الجديد هنا
  {
    type: "collapse",
    name: "Manage Discounts",
    key: "discounts",
    icon: <Icon fontSize="small">local_offer</Icon>, // أيقونة مناسبة للخصومات والعروض
    route: "/discounts",
    component: <ManageDiscounts />,
  },
  {
    type: "collapse",
    name: "User management",
    key: "users",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "collapse",
    name: "Subscription management",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Chatbot Settings",
    key: "chatbot-settings",
    icon: <Icon fontSize="small">smart_toy</Icon>,
    route: "/chatbot-settings",
    component: <ChatbotSettings />,
  },
  {
    type: "collapse",
    name: "Payments Table",
    key: "PaymentsTable",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/PaymentsTable",
    component: <PaymentsTable />,
  },
  {
    type: "collapse",
    name: "Incoming Transactions",
    key: "incomingTransactions",
    icon: <Icon fontSize="small">receipt</Icon>,
    route: "/incoming-transactions",
    component: <IncomingTransactions />,
  },
  {
    type: "collapse-group", // <-- نوع جديد للقائمة المنسدلة
    name: "Tools",
    key: "tools",
    icon: <Icon fontSize="small">build</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Broadcasts", // Broadcast Messages
        key: "broadcasts",
        icon: <Icon fontSize="small">campaign</Icon>, // أيقونة مناسبة
        route: "/broadcasts",
        component: <Broadcasts />,
      },
      {
        type: "collapse",
        name: "Channel Audit",
        key: "channel-audit",
        icon: <Icon fontSize="small">rule</Icon>, // أيقونة مناسبة
        route: "/channel-audit",
        component: <ChannelAudit />, // <-- ربط المكون الجديد
      },
    ],
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
