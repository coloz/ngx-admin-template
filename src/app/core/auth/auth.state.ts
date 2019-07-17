import { State, Action, StateContext } from '@ngxs/store';

export interface AuthStateModel {
    isLogin: boolean,
    uuid: string,
    token: string
}

export enum AuthActionTypes {
    Login = '[Login] Action',
    Logout = '[Logout] Action',
    Register = '[Register] Action',
    // UserRequested = '[Request User] Action',
    // UserLoaded = '[Load User] Auth API'
}

export class Login {
    static readonly type = AuthActionTypes.Login;
    constructor(public payload: { uuid: string, token: string }) { }
}

export class Logout {
    static readonly type = AuthActionTypes.Logout;
}

export class Register {
    static readonly type = AuthActionTypes.Register;
    constructor(public payload: { authToken: string }) { }
}


// export class UserRequested {
//     readonly type = AuthActionTypes.UserRequested;
// }

// export class UserLoaded {
//     readonly type = AuthActionTypes.UserLoaded;
//     constructor(public payload: { user: User }) { }
// }



@State<AuthStateModel>({
    name: 'AuthState',
    defaults: {
        isLogin: false,
        uuid: undefined,
        token: undefined
    }
})
export class AuthState {
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        const state = ctx.getState();
        ctx.setState({
            isLogin: true,
            uuid: action.payload.uuid,
            token: action.payload.token
        });
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            isLogin: false,
            uuid: undefined,
            token: undefined
        });
    }
}