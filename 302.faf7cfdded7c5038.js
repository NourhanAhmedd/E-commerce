"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[302],{3302:(I,l,i)=>{i.r(l),i.d(l,{ForgotPassModule:()=>b});var a=i(95),u=i(6814),m=i(7163),t=i(4769),g=i(9214);function d(e,n){1&e&&(t.TgZ(0,"p",11),t._uU(1," Email required "),t.qZA())}function c(e,n){1&e&&(t.TgZ(0,"p",11),t._uU(1," Email invaild pattern "),t.qZA())}function p(e,n){if(1&e&&(t.TgZ(0,"div",9),t.YNc(1,d,2,0,"p",10),t.YNc(2,c,2,0,"p",10),t.qZA()),2&e){const s=t.oxw(2);let o,r;t.xp6(1),t.Q6J("ngIf",null==(o=s.forgotPasswordForm.get("email"))?null:o.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(r=s.forgotPasswordForm.get("email"))?null:r.getError("email"))}}function _(e,n){if(1&e&&(t.TgZ(0,"div",12)(1,"p",11),t._uU(2),t.qZA()()),2&e){const s=t.oxw(2);t.xp6(2),t.Oqu(s.userMassage)}}function f(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.forgotPassword())}),t.TgZ(2,"label",4),t._uU(3,"Email:"),t.qZA(),t._UZ(4,"input",5),t.YNc(5,p,3,2,"div",6),t.TgZ(6,"button",7),t._uU(7," Send Code "),t.qZA(),t.YNc(8,_,3,1,"div",8),t.qZA()()}if(2&e){const s=t.oxw();let o;t.xp6(1),t.Q6J("formGroup",s.forgotPasswordForm),t.xp6(4),t.Q6J("ngIf",(null==(o=s.forgotPasswordForm.get("email"))?null:o.errors)&&(null==(o=s.forgotPasswordForm.get("email"))?null:o.touched)),t.xp6(3),t.Q6J("ngIf",""!==s.userMassage)}}function v(e,n){if(1&e&&(t.TgZ(0,"div",12)(1,"p",11),t._uU(2),t.qZA()()),2&e){const s=t.oxw(2);t.xp6(2),t.Oqu(s.userMassage)}}function w(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.verifyResetCode())}),t.TgZ(2,"label",13),t._uU(3,"Code:"),t.qZA(),t._UZ(4,"input",14),t.TgZ(5,"button",7),t._uU(6," Verify Code "),t.qZA(),t.YNc(7,v,3,1,"div",8),t.qZA()()}if(2&e){const s=t.oxw();t.xp6(1),t.Q6J("formGroup",s.verifyResetCodeForm),t.xp6(6),t.Q6J("ngIf",""!==s.userMassage)}}function P(e,n){1&e&&(t.TgZ(0,"p",11),t._uU(1," Password required "),t.qZA())}function x(e,n){1&e&&(t.TgZ(0,"p",11),t._uU(1," Password min length is 6 "),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"div",9),t.YNc(1,P,2,0,"p",10),t.YNc(2,x,2,0,"p",10),t.qZA()),2&e){const s=t.oxw(2);let o,r;t.xp6(1),t.Q6J("ngIf",null==(o=s.resetPasswordForm.get("newPassword"))?null:o.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(r=s.resetPasswordForm.get("newPassword"))?null:r.getError("minlength"))}}function h(e,n){if(1&e&&(t.TgZ(0,"div",12)(1,"p",11),t._uU(2),t.qZA()()),2&e){const s=t.oxw(2);t.xp6(2),t.Oqu(s.userMassage)}}function C(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.resetPassword())}),t.TgZ(2,"label",13),t._uU(3,"Enter New Password:"),t.qZA(),t._UZ(4,"input",15),t.YNc(5,F,3,2,"div",6),t.TgZ(6,"button",7),t._uU(7," Submit "),t.qZA(),t.YNc(8,h,3,1,"div",8),t.qZA()()}if(2&e){const s=t.oxw();let o;t.xp6(1),t.Q6J("formGroup",s.resetPasswordForm),t.xp6(4),t.Q6J("ngIf",(null==(o=s.resetPasswordForm.get("newPassword"))?null:o.errors)&&(null==(o=s.resetPasswordForm.get("newPassword"))?null:o.touched)),t.xp6(3),t.Q6J("ngIf",""!==s.userMassage)}}const Z=[{path:"",component:(()=>{var e;class n{constructor(o,r){this._authenticationService=o,this._router=r,this.step1=!0,this.step2=!1,this.step3=!1,this.userEmail="",this.userMassage="",this.forgotPasswordForm=new a.cw({email:new a.NI("",[a.kI.required,a.kI.email])}),this.verifyResetCodeForm=new a.cw({resetCode:new a.NI("")}),this.resetPasswordForm=new a.cw({newPassword:new a.NI("",[a.kI.required,a.kI.minLength(6)])})}forgotPassword(){this.userEmail=this.forgotPasswordForm.value.email,this._authenticationService.forgotPassword(this.forgotPasswordForm.value).subscribe({next:o=>{this.userMassage=o.message,this.step1=!1,this.step2=!0},error:o=>{this.userMassage=o.error.message}})}verifyResetCode(){this._authenticationService.verifyResetCode(this.verifyResetCodeForm.value).subscribe({next:o=>{this.userMassage=o.status,this.step2=!1,this.step3=!0},error:o=>{this.userMassage=o.error.message}})}resetPassword(){let o=this.resetPasswordForm.value;o.email=this.userEmail,this._authenticationService.resetPassword(o).subscribe({next:r=>{r.token&&(localStorage.setItem("token",r.token),this._router.navigate(["/home"]))},error:r=>{this.userMassage=r.error.message}})}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(g.$),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-pass"]],decls:5,vars:3,consts:[[1,"text-center","fw-semibold","mt-3","p-3"],["class","P-4 w-75 bg-main-light my-4 mx-auto",4,"ngIf"],[1,"P-4","w-75","bg-main-light","my-4","mx-auto"],[1,"p-4",3,"formGroup","ngSubmit"],["for","email"],["type","email","formControlName","email",1,"form-control","mb-3"],["class","alert alert-danger",4,"ngIf"],["type","submit",1,"btn","bg-main","text-white","d-block","mx-auto"],["class","alert alert-danger my-2",4,"ngIf"],[1,"alert","alert-danger"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"alert","alert-danger","my-2"],["for","resetCode"],["type","text","formControlName","resetCode",1,"form-control","mb-3"],["type","password","formControlName","newPassword",1,"form-control","mb-3"]],template:function(o,r){1&o&&(t.TgZ(0,"h3",0),t._uU(1,"Reset Password"),t.qZA(),t.YNc(2,f,9,3,"div",1),t.YNc(3,w,8,2,"div",1),t.YNc(4,C,9,3,"div",1)),2&o&&(t.xp6(2),t.Q6J("ngIf",r.step1),t.xp6(1),t.Q6J("ngIf",r.step2),t.xp6(1),t.Q6J("ngIf",r.step3))},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".h-fix[_ngcontent-%COMP%]{height:20rem}"]}),n})()}];let T=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(Z),m.Bz]}),n})(),b=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,T,a.UX]}),n})()}}]);