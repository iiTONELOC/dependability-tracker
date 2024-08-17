import {logTemplate} from '../../utils/server';
import {uuid} from '../../utils/shared/uuid';
import {Division, Employee} from '../models';
import {EmployeeCreationAttributes} from '../models/Employee';

// object containing employee seed data
const employeeSeeds = [
  // Supervisors
  {
    id: '1',
    name: 'Alex Mercer',
    division_ids: ['1', '2', '3']
  },
  {
    id: '2',
    name: 'Jordan Lee',
    division_ids: ['1', '2', '3']
  },
  {
    id: '3',
    name: 'Taylor Morgan',
    division_ids: ['1', '2', '3']
  },
  {
    id: '4',
    name: 'Casey Reed',
    division_ids: ['1', '2', '3']
  },
  {
    id: '5',
    name: 'Jamie Parker',
    division_ids: ['1', '2', '3']
  },
  {
    id: '6',
    name: 'Riley Quinn',
    division_ids: ['1', '2', '3']
  },
  {
    id: '7',
    name: 'Avery Brooks',
    division_ids: ['1', '2', '3']
  },
  {
    id: '8',
    name: 'Morgan Davis',
    division_ids: ['1', '2', '3']
  },
  {
    id: '9',
    name: 'Dakota Gray',
    division_ids: ['1', '2', '3']
  },
  {
    id: '11',
    name: 'Sydney Taylor',
    division_ids: ['1', '2', '3']
  },
  {
    id: '12',
    name: 'Cameron Fox',
    division_ids: ['1', '2', '3']
  },
  {
    id: '13',
    name: 'Peyton Brooks',
    division_ids: ['1', '2', '3']
  },
  {
    id: '14',
    name: 'Casey Jordan',
    division_ids: ['1', '2', '3']
  },
  {
    id: '15',
    name: 'Charlie Lee',
    division_ids: ['1', '2', '3']
  },
  {
    id: '16',
    name: 'Sam Taylor',
    division_ids: ['1', '2', '3']
  },

  // Employees
  {
    id: '17',
    name: 'Riley Carter',
    division_ids: ['1']
  },
  {
    id: '18',
    name: 'Jamie Morgan',
    division_ids: ['1']
  },
  {
    id: '19',
    name: 'Dakota Smith',
    division_ids: ['1']
  },
  {
    id: '20',
    name: 'Jordan Taylor',
    division_ids: ['1']
  },
  {
    id: '21',
    name: 'Alex Rivera',
    division_ids: ['1']
  },
  {
    id: '22',
    name: 'Peyton Lee',
    division_ids: ['1']
  },
  {
    id: '23',
    name: 'Taylor Grant',
    division_ids: ['1']
  },
  {
    id: '24',
    name: 'Casey Mitchell',
    division_ids: ['1']
  },
  {
    id: '25',
    name: 'Morgan Green',
    division_ids: ['1']
  },
  {
    id: '26',
    name: 'Riley Adams',
    division_ids: ['1']
  },
  {
    id: '27',
    name: 'Jordan Collins',
    division_ids: ['1']
  },
  {
    id: '28',
    name: 'Casey Reed',
    division_ids: ['1']
  },
  {
    id: '29',
    name: 'Peyton Walker',
    division_ids: ['1']
  },
  {
    id: '30',
    name: 'Alex Taylor',
    division_ids: ['1']
  },
  {
    id: '31',
    name: 'Jamie Parker',
    division_ids: ['1']
  },
  {
    id: '32',
    name: 'Sydney Johnson',
    division_ids: ['1']
  },
  {
    id: '33',
    name: 'Morgan Carter',
    division_ids: ['1']
  },
  {
    id: '34',
    name: 'Dakota Lewis',
    division_ids: ['1']
  },
  {
    id: '35',
    name: 'Evelyn Martinez',
    division_ids: ['2']
  },
  {
    id: '36',
    name: 'Liam Thompson',
    division_ids: ['2']
  },
  {
    id: '37',
    name: 'Olivia Johnson',
    division_ids: ['2']
  },
  {
    id: '38',
    name: 'Noah Williams',
    division_ids: ['2']
  },
  {
    id: '39',
    name: 'Sophia Brown',
    division_ids: ['2']
  },
  {
    id: '40',
    name: 'James Davis',
    division_ids: ['3']
  },
  {
    id: '41',
    name: 'Isabella Garcia',
    division_ids: ['3']
  },
  {
    id: '42',
    name: 'Benjamin Wilson',
    division_ids: ['3']
  },
  {
    id: '43',
    name: 'Mia Anderson',
    division_ids: ['3']
  },
  {
    id: '44',
    name: 'Lucas Martinez',
    division_ids: ['3']
  }
];

// Seeding function
const seedEmployees = async () => {
  // get the division ids
  const divisions = await Division.findAll();

  if (divisions.length === 0) {
    throw new Error('No divisions found');
  }

  const divisionIds = divisions.map(division => division.id);
  const publicParkingId = divisions.find(division => division.name === 'Public Parking')?.id;

  // on ids 1-16, replace the division_ids with the divisionIds array
  employeeSeeds.forEach(employee => {
    if (parseInt(employee.id, 10) <= 16) {
      employee.division_ids = divisionIds;
    } else {
      // assign the first division id to the rest of the employees
      employee.division_ids = [publicParkingId as string];
    }

    employee.id = uuid();
  });

  try {
    await Employee.bulkCreate(employeeSeeds as EmployeeCreationAttributes[], {
      ignoreDuplicates: true
    });
    console.log(logTemplate('  ✅ Employee seeds inserted successfully'));
  } catch (error) {
    const errMessage = '❌ Error seeding employees:' + ' ' + error;
    console.error(logTemplate(errMessage, 'error'));
  }
};

export default seedEmployees;
