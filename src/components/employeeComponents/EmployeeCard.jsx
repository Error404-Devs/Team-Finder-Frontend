/* eslint-disable react/prop-types */

import { Card, Avatar, Modal, Badge, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function EmployeeCard({ employee }) {

    const [opened, { open, close }] = useDisclosure(false);
    const getInitials = (name) => {
        const names = name.split(' ');
        return names.map((name) => name[0]).join('').toUpperCase();
    };

    return (
        <>
            <Modal opened={opened} onClose={close} centered overflow="inside" className="bg-graybg text-white select-none">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold">{employee.name}</h1>
                </div>
                <div className="flex justify-center p-6">
                    <p>{employee.email}</p>
                </div>
                <div className="pt-4 flex justify-start">
                    <p className="ml-8 text-lg font-bold">Roles:</p>
                </div>

                <div className="pt-4 flex justify-center">
                    { !employee.user_roles.length && (<Badge color="gray" size="xl" variant="filled">Employee</Badge>) }
                    { employee.user_roles.includes("admin") && (<Badge color="gray" size="xl" variant="filled">Organization Admin</Badge>) }
                    { employee.user_roles.includes("dept_manager") && (<Badge color="gray" size="xl" variant="filled">Department Manager</Badge>) }
                    { employee.user_roles.includes("proj_manager") && (<Badge color="gray" size="xl" variant="filled">Project Manager</Badge>) }
                </div>

                <div className="pt-4 flex flex-col items-center">
                    <Button className="bg-accent text-white hover:bg-btn_hover font-bold rounded">Make Department manager</Button>
                </div>
            </Modal>

            <Card className="flex w-[300px] h-[230px] bg-[#505A5E] mx-[40px] my-[20px] rounded-xl dark:text-darktext text-text select-none font-bold" onClick={open}>
                <div className="flex items-center">
                    <Avatar className="m-3 w-[50px] h-[50px] bg-[#E9E5E6]">{getInitials(employee.name)}</Avatar>
                    <div className="flex flex-col">
                        <div className="text-xl font-bold">{employee.name}</div>
                    </div>
                </div>
                <div className='ml-3'>{employee.email}</div>
                <div className="pt-4 flex justify-center">
                    { !employee.user_roles.length && (<Badge color="gray" size="xl" variant="filled">Employee</Badge>) }
                    { employee.user_roles.includes("admin") && (<Badge color="gray" size="xl" variant="filled">Organization Admin</Badge>) }
                    { employee.user_roles.includes("dept_manager") && (<Badge color="gray" size="xl" variant="filled">Department Manager</Badge>) }
                    { employee.user_roles.includes("proj_manager") && (<Badge color="gray" size="xl" variant="filled">Project Manager</Badge>) }
                </div>
            </Card>
        </>
    )
}