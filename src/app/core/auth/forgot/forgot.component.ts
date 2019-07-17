import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

	loginForm: FormGroup;

	constructor(
		private router: Router,
		private authService: AuthService,
		private formBuilder: FormBuilder,
		private cdr: ChangeDetectorRef,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.initLoginForm();
	}

	initLoginForm() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.compose([
				Validators.required,
				Validators.minLength(11),
				Validators.maxLength(13)
			]),
			],
			smscode: ['', Validators.compose([
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(6)
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

	back() {
		this.router.navigateByUrl('/auth/login')
	}

	sendSmscode() {
		let phone = this.loginForm.controls['username'].value;
		this.authService.sendSmscode(phone, 'forgot')
	}
}
