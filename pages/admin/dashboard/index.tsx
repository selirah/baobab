import { AdminLayout } from 'layouts'

const DashboardPage = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <div className="block bg-light-container dark:bg-dark-container shadow-penumbra rounded">
        This is the general application dashboard
      </div>
    </AdminLayout>
  )
}

export default DashboardPage
