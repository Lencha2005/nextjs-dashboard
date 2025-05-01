import { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import {  fetchFilteredCustomers } from "@/app/lib/data"; // ← припустимо, що ця функція існує

export const metadata: Metadata = {
  title: "Customers",
};
console.log('➡ Старт CustomersPage');

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query); // дістаємо дані
  console.log('Loaded customers:', customers);
  return (
    <div className="p-6">
      <CustomersTable customers={customers} />
    </div>
  );
}
