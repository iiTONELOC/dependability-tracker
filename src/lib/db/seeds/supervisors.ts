import {logTemplate} from '../../utils/server';
import {Employee, Supervisor} from '../models';

// object containing supervisor seed data
const supervisorSeeds = [
  // Supervisors
  {
    employee_id: '1',
    is_admin: true,
    name: 'Alex Mercer'
  },
  {
    employee_id: '2',
    is_admin: false,
    name: 'Jordan Lee'
  },
  {
    employee_id: '3',
    is_admin: false,
    name: 'Taylor Morgan'
  },
  {
    employee_id: '4',
    is_admin: false,
    name: 'Casey Reed'
  },
  {
    employee_id: '5',
    is_admin: false,
    name: 'Jamie Parker'
  },
  {
    employee_id: '6',
    is_admin: false,
    name: 'Riley Quinn'
  },
  {
    employee_id: '7',
    is_admin: false,
    name: 'Avery Brooks'
  },
  {
    employee_id: '8',
    is_admin: false,
    name: 'Morgan Davis'
  },
  {
    employee_id: '9',
    is_admin: false,
    name: 'Dakota Gray'
  },
  {
    employee_id: '11',
    is_admin: false,
    name: 'Sydney Taylor'
  },
  {
    employee_id: '12',
    is_admin: false,
    name: 'Cameron Fox'
  },
  {
    employee_id: '13',
    is_admin: false,
    name: 'Peyton Brooks'
  },
  {
    employee_id: '14',
    is_admin: false,
    name: 'Casey Jordan'
  },
  {
    employee_id: '15',
    is_admin: false,
    name: 'Charlie Lee'
  },
  {
    employee_id: '16',
    is_admin: false,
    name: 'Sam Taylor'
  }
];
// Seeding function
const seedSupervisors = async () => {
  for (const supervisor of supervisorSeeds) {
    // lookup the employee id
    const employee = await Employee.findOne({where: {name: supervisor.name}});
    if (employee) {
      supervisor.employee_id = employee.id;
    } else {
      console.error(
        logTemplate(`❌ Employee not found: ${supervisor ? supervisor.name : 'undefined'}`),
        'error'
      );
      // remove the supervisor from the seeds array
      supervisorSeeds.splice(supervisorSeeds.indexOf(supervisor), 1);
    }
  }

  try {
    await Supervisor.bulkCreate(supervisorSeeds, {ignoreDuplicates: true});
    console.log(logTemplate('  ✅ Supervisor seeds inserted successfully'));
  } catch (error) {
    const errMessage = '❌ Error seeding supervisors:' + ' ' + error;
    console.error(logTemplate(errMessage, 'error'));
  }
};

export default seedSupervisors;
