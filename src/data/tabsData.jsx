import {
  DesktopWindowsOutlined,
  LeaderboardOutlined,
  TrendingUpOutlined,
  CurrencyBitcoinOutlined,
  AccountCircleOutlined,
  PeopleAltOutlined,
  LocalMallOutlined,
  ShoppingCartOutlined,
  DescriptionOutlined,
  LocalShippingOutlined,
  SchoolOutlined,
  ListOutlined,
  ShareOutlined,
  ListAltOutlined,
  FileUploadOutlined,
  MailOutline,
  ChatBubbleOutline,
  CalendarTodayOutlined,
  LockOutlined,
  CreditCardOutlined,
  LogoutOutlined,
  DraftsOutlined,
  ErrorOutlineOutlined,
} from "@mui/icons-material";

export const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabPabel-${index}`,
  };
};

export const tabsProductionData = [
  {
    label: "نمای کلی",
    icon: <DesktopWindowsOutlined />,
  },
  {
    label: "تجزیه و تحلیل",
    icon: <LeaderboardOutlined />,
  },
  {
    label: "تجارت الکترونیک",
    icon: <TrendingUpOutlined />,
  },
  {
    label: "رمز نگاری",
    icon: <CurrencyBitcoinOutlined />,
  },
  {
    label: "حساب",
    icon: <AccountCircleOutlined />,
  },
];

export const tabsConceptsData = [
  {
    label: "مشتری ها",
    icon: <PeopleAltOutlined />,
    disabled: true,
  },
  {
    label: "محصولات",
    icon: <LocalMallOutlined />,
    disabled: true,
  },
  {
    label: "سفارشات",
    icon: <ShoppingCartOutlined />,
    disabled: true,
  },
  {
    label: "فاکتور ها",
    icon: <DescriptionOutlined />,
    disabled: true,
  },
  {
    label: "تدارکات",
    icon: <LocalShippingOutlined />,
    disabled: true,
  },
  {
    label: "آموزشگاه",
    icon: <SchoolOutlined />,
    disabled: true,
  },
  {
    label: "لیست مشاغل",
    icon: <ListOutlined />,
    disabled: true,
  },
  {
    label: "رسانه های اجتماعی",
    icon: <ShareOutlined />,
    disabled: true,
  },
  {
    label: "وبلاگ",
    icon: <ListAltOutlined />,
    disabled: true,
  },
  {
    label: "مدیر فایل",
    icon: <FileUploadOutlined />,
    disabled: true,
  },
  {
    label: "پست",
    icon: <MailOutline />,
    disabled: true,
  },
  {
    label: "چت",
    icon: <ChatBubbleOutline />,
    disabled: true,
  },
  {
    label: "تقویم",
    icon: <CalendarTodayOutlined />,
    disabled: true,
  },
];

export const tabsPagesData = [
  {
    label: "احراز هویت",
    icon: <LockOutlined />,
    disabled: true,
  },
  {
    label: "قیمت گذاری",
    icon: <CreditCardOutlined />,
    disabled: true,
  },
  {
    label: "تسویه حساب",
    icon: <LogoutOutlined />,
    disabled: true,
  },
  {
    label: "تماس",
    icon: <DraftsOutlined />,
    disabled: true,
  },
  {
    label: "خطا",
    icon: <ErrorOutlineOutlined />,
    disabled: true,
  },
];
