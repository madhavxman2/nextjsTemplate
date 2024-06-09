// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  {
    id: '1eecb2b0-5b9b-4e69-bc72-9241a1c3b6f8',
    name: 'Alice Johnson',
    email: 'alice@nextmail.com',
    password: 'password123',
  },
  {
    id: '2edc8e3f-9a0e-44a7-8f44-fbc6a1d2f763',
    name: 'Bob Smith',
    email: 'bob@nextmail.com',
    password: 'password456',
  },
];

const customers = [
  {
    id: '1a2b3c4d-5678-9101-1234-56789abcdef0',
    name: 'Jane Doe',
    email: 'jane@doe.com',
    image_url: '/customers/jane-doe.jpg',
  },
  {
    id: '2b3c4d5e-6789-1011-1234-56789abcdef1',
    name: 'John Roe',
    email: 'john@roe.com',
    image_url: '/customers/john-roe.jpg',
  },
  {
    id: '3c4d5e6f-7890-1112-1234-56789abcdef2',
    name: 'Alice Cooper',
    email: 'alice@cooper.com',
    image_url: '/customers/alice-cooper.jpg',
  },
  {
    id: '4d5e6f70-8901-1213-1234-56789abcdef3',
    name: 'Charlie Brown',
    email: 'charlie@brown.com',
    image_url: '/customers/charlie-brown.jpg',
  },
  {
    id: '5e6f7081-9012-1314-1234-56789abcdef4',
    name: 'David Smith',
    email: 'david@smith.com',
    image_url: '/customers/david-smith.jpg',
  },
  {
    id: '6f708192-0123-1415-1234-56789abcdef5',
    name: 'Eve Johnson',
    email: 'eve@johnson.com',
    image_url: '/customers/eve-johnson.jpg',
  },
  {
    id: '708192a3-1234-1516-1234-56789abcdef6',
    name: 'Frank Wright',
    email: 'frank@wright.com',
    image_url: '/customers/frank-wright.jpg',
  },
  {
    id: '8192a3b4-2345-1617-1234-56789abcdef7',
    name: 'Grace Lee',
    email: 'grace@lee.com',
    image_url: '/customers/grace-lee.jpg',
  },
  {
    id: '92a3b4c5-3456-1718-1234-56789abcdef8',
    name: 'Hank Green',
    email: 'hank@green.com',
    image_url: '/customers/hank-green.jpg',
  },
  {
    id: 'a3b4c5d6-4567-1819-1234-56789abcdef9',
    name: 'Ivy Adams',
    email: 'ivy@adams.com',
    image_url: '/customers/ivy-adams.jpg',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 20000,
    status: 'pending',
    date: '2024-01-01',
  },
  {
    customer_id: customers[1].id,
    amount: 15000,
    status: 'paid',
    date: '2024-02-15',
  },
  {
    customer_id: customers[2].id,
    amount: 10000,
    status: 'pending',
    date: '2024-03-20',
  },
  {
    customer_id: customers[3].id,
    amount: 25000,
    status: 'paid',
    date: '2024-04-10',
  },
  {
    customer_id: customers[4].id,
    amount: 30000,
    status: 'pending',
    date: '2024-05-05',
  },
  {
    customer_id: customers[5].id,
    amount: 35000,
    status: 'paid',
    date: '2024-06-25',
  },
  {
    customer_id: customers[6].id,
    amount: 40000,
    status: 'pending',
    date: '2024-07-30',
  },
  {
    customer_id: customers[7].id,
    amount: 45000,
    status: 'paid',
    date: '2024-08-14',
  },
  {
    customer_id: customers[8].id,
    amount: 50000,
    status: 'pending',
    date: '2024-09-09',
  },
  {
    customer_id: customers[9].id,
    amount: 55000,
    status: 'paid',
    date: '2024-10-19',
  },
];

const revenue = [
  { month: 'Jan', revenue: 3000 },
  { month: 'Feb', revenue: 2500 },
  { month: 'Mar', revenue: 2800 },
  { month: 'Apr', revenue: 3000 },
  { month: 'May', revenue: 3200 },
  { month: 'Jun', revenue: 4000 },
  { month: 'Jul', revenue: 4500 },
  { month: 'Aug', revenue: 4700 },
  { month: 'Sep', revenue: 3500 },
  { month: 'Oct', revenue: 3800 },
  { month: 'Nov', revenue: 4200 },
  { month: 'Dec', revenue: 5000 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
