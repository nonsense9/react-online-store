import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

export const Breadcrumbs = () => {
  return (
    <Breadcrumb className="my-3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Smartphones</BreadcrumbItem>
      <BreadcrumbItem>iPhone 14 Pro Max</BreadcrumbItem>
    </Breadcrumb>
  );
};
