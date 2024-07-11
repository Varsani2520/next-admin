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

const Routes = ({ isOpen }) => {
  return (
    <div>
      {isOpen && <SidebarHeading title={"PROVIDER MANAGEMENT"} />}

      <NavigationLink
        icon={<SettingsOutlined />}
        target={"/"}
        title={"Providers"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<MiscellaneousServicesOutlined />}
        target={"/"}
        title={"Services | Category"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<ShoppingCartOutlined />}
        target={"/"}
        title={"Cart"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<ListOutlined />}
        isOpen={isOpen}
        target={"/"}
        title={"Orders"}
      />
      <NavigationLink
        icon={<PaymentOutlined />}
        target={"/"}
        title={"Payment Collections"}
        isOpen={isOpen}
      />

      {isOpen && <SidebarHeading title={"SERVICE MANAGEMENT"} />}

      <NavigationLink
        icon={<RectangleOutlined />}
        target={"/"}
        title={"Sliders"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<SpaceDashboardOutlined />}
        target={"/"}
        title={"Featured Section"}
        isOpen={isOpen}
      />

      {isOpen && <SidebarHeading title={"CUSTOMER MANAGEMENT"} />}

      <NavigationLink
        icon={<PermIdentityOutlined />}
        target={"/"}
        title={"Users"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<ShoppingCartOutlined />}
        target={"/"}
        title={"Roles"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<CurrencyExchangeOutlined />}
        target={"/"}
        title={"Transactions"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<BusinessOutlined />}
        target={"/"}
        title={"Addresses"}
        isOpen={isOpen}
      />

      {isOpen && <SidebarHeading title={"PROMOTIONS MANAGEMENT"} />}

      <NavigationLink
        icon={<SellOutlined />}
        target={"/"}
        title={"Promo Codes"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<NotificationsOutlined />}
        target={"/"}
        title={"Send Notifications"}
        isOpen={isOpen}
      />
      <NavigationLink
        icon={<EmailOutlined />}
        target={"/"}
        title={"Send Emails"}
        isOpen={isOpen}
      />

      {isOpen && <SidebarHeading title={"SUBSCRIPTION MANAGEMENT"} />}

      <NavigationLink
        icon={<FavoriteBorderOutlined />}
        target={"/"}
        title={"Subscriptions"}
        isOpen={isOpen}
      />

      {isOpen && <SidebarHeading title={"SYSTEM MANAGEMENT"} />}

      <NavigationLink
        icon={<QuestionMarkOutlined />}
        target={"/"}
        title={"Faqs"}
        isOpen={isOpen}
      />
    </div>
  );
};

export default Routes;
