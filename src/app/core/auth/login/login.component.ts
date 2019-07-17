import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	unsubscribe: Subject<any>;
	returnUrl: any;

	loading = false;
	showError = false;

	constructor(
		private router: Router,
		private auth: AuthService,
		private formBuilder: FormBuilder,
		private cdr: ChangeDetectorRef,
		private route: ActivatedRoute
	) {
		this.unsubscribe = new Subject();
	}

	ngOnInit(): void {
		this.initLoginForm();
		this.route.queryParams.subscribe(params => {
			this.returnUrl = params['returnUrl'] || '/';
		});
	}

	ngOnDestroy(): void {
		// this.authNoticeService.setNotice(null);
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}

	initLoginForm() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.compose([
				Validators.required,
				Validators.minLength(11),
				Validators.maxLength(13)
			])
			],
			password: ['', Validators.compose([
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(99)
			])
			]
		});
	}

	submit() {
		const controls = this.loginForm.controls;
		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;

		const authData = {
			username: controls['username'].value,
			password: controls['password'].value
		};

		// this.store.dispatch(new Login({ authToken: 'user.accessToken' }));
		this.auth
			.login(authData.username, authData.password)
			.pipe(
				tap(response => {
					// console.log(response);
					if (response)
						this.router.navigateByUrl('/')
					else
						this.showError = true;
				}),
				takeUntil(this.unsubscribe),
				finalize(() => {
					this.loading = false;
					this.cdr.markForCheck();
				})
			)
			.subscribe();
	}

}
