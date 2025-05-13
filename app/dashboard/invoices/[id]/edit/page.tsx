import { EditInvoiceSkeleton } from "@/app/ui/skeletons";
import EditInvoice from "@/app/ui/invoices/edit-invoice";
import { Suspense } from 'react';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    return (
        <div className="w-full">
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Invoices', href: '/dashboard/invoices' },
                {
                    label: 'Edit Invoice',
                    href: `/dashboard/invoices/${id}/edit`,
                    active: true,
                },
                ]}
            />
            <Suspense fallback={<EditInvoiceSkeleton />}>
                <EditInvoice id={id} />
            </Suspense>
        </div>
    )
    
}