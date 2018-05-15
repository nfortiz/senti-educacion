
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class currentUser {
   user:User={ name : 'Usuario Actual Jajaja XD',
    password: 'pas1',
    email: 'p1@u.edu',
    rol: 'profesor'};
    exists=false;
};
