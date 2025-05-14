import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
export default async function EditInvoice({ id } : { id: string }) {
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);
    if(!invoice){
        notFound()
    }
    return (
        <>

        <Form invoice={invoice} customers={customers} />
        </>
    );
}