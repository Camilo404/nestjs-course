import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: any[] = [
        {
            id: 1,
            name: 'User 1'
        },
        {
            id: 2,
            name: 'User 2'
        },
        {
            id: 3,
            name: 'User 3'
        }
    ]

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        console.log(user);
        this.users.push(
            {
                id: this.users.length + 1,
                ...user
            }
        );
        return user;
    }

}
