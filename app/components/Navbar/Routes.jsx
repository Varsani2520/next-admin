import React from "react";
import NavigationLink from "./NavigationLink";
import {
  BusinessOutlined,
  CurrencyExchangeOutlined,
  EmailOutlined,
  FavoriteBorderOutlined,
  ListOutlined,
  MiscellaneousServicesOutlined,
  NotificationsOutlined,
  PaymentOutlined,
  QuestionMarkOutlined,
  RectangleOutlined,
  SellOutlined,
  SettingsOutlined,
  SpaceDashboardOutlined,
  ShoppingCartOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import SidebarHeading from "../common/SidebarHeading";

const Routes = ({isOpen}) => {
  return (
    <div>
      {isOpen && <SidebarHeading title={"PROVIDER MANAGEMENT"} />}

      <NavigationLink
        icon={<SettingsOutlined />}
        target={"/"}
        title={"Providers"}
      />
      <NavigationLink
        icon={<MiscellaneousServicesOutlined />}
        target={"/"}
        title={"Services | Category"}
      />
      <NavigationLink
        icon={<ShoppingCartOutlined />}
        target={"/"}
        title={"Cart"}
      />
      <NavigationLink icon={<ListOutlined />} target={"/"} title={"Orders"} />
      <NavigationLink
        icon={<PaymentOutlined />}
        target={"/"}
        title={"Payment Collections"}
      />

      {isOpen && <SidebarHeading title={"SERVICE MANAGEMENT"} />}

      <NavigationLink
        icon={<RectangleOutlined />}
        target={"/"}
        title={"Sliders"}
      />
      <NavigationLink
        icon={<SpaceDashboardOutlined />}
        target={"/"}
        title={"Featured Section"}
      />

      {isOpen && <SidebarHeading title={"CUSTOMER MANAGEMENT"} />}

      <NavigationLink
        icon={<PermIdentityOutlined />}
        target={"/"}
        title={"Users"}
      />
      <NavigationLink
        icon={<ShoppingCartOutlined />}
        target={"/"}
        title={"Roles"}
      />
      <NavigationLink
        icon={<CurrencyExchangeOutlined />}
        target={"/"}
        title={"Transactions"}
      />
      <NavigationLink
        icon={<BusinessOutlined />}
        target={"/"}
        title={"Addresses"}
      />

      {isOpen && <SidebarHeading title={"PROMOTIONS MANAGEMENT"} />}

      <NavigationLink
        icon={<SellOutlined />}
        target={"/"}
        title={"Promo Codes"}
      />
      <NavigationLink
        icon={<NotificationsOutlined />}
        target={"/"}
        title={"Send Notifications"}
      />
      <NavigationLink
        icon={<EmailOutlined />}
        target={"/"}
        title={"Send Emails"}
      />

      {isOpen && <SidebarHeading title={"SUBSCRIPTION MANAGEMENT"} />}

      <NavigationLink
        icon={<FavoriteBorderOutlined />}
        target={"/"}
        title={"Subscriptions"}
      />

      {isOpen && <SidebarHeading title={"SYSTEM MANAGEMENT"} />}

      <NavigationLink
        icon={<QuestionMarkOutlined />}
        target={"/"}
        title={"Faqs  "}
      />
    </div>
  );
};

export default Routes;
