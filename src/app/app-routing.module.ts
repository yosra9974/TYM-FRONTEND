import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBuyerAdminComponent } from "./backOffice/register-buyer-admin/register-buyer-admin.component";
import { AllTemplateAdminComponent } from "./backOffice/all-template-admin/all-template-admin.component";
import { AllTemplateUserComponent } from "./frontOffice/all-template-user/all-template-user.component";
import { RegisterVendorAdminComponent } from "./backOffice/register-vendor-admin/register-vendor-admin.component";
import { RegisterProviderAdminComponent } from "./backOffice/register-provider-admin/register-provider-admin.component";
import { RegisterBuyerUserComponent } from "./frontOffice/register-buyer-user/register-buyer-user.component";
import { RegisterProviderUserComponent } from "./frontOffice/register-provider-user/register-provider-user.component";
import { RegisterVendorUserComponent } from "./frontOffice/register-vendor-user/register-vendor-user.component";
import { SendCodeUserComponent } from "./frontOffice/send-code-user/send-code-user.component";
import { HomeUserComponent } from "./frontOffice/home-user/home-user.component";
import { RegisterUserComponent } from "./frontOffice/register-user/register-user.component";
import { AuthenticationUserComponent } from "./frontOffice/authentication-user/authentication-user.component";
import { UploadLogoUserComponent } from "./frontOffice/upload-logo-user/upload-logo-user.component";
import { ShowAdminComponent } from "./backOffice/show-admin/show-admin.component";
import { DashboardAdminComponent } from "./backOffice/dashboard-admin/dashboard-admin.component";
import { DetailsAdminComponent } from "./backOffice/details-admin/details-admin.component";
import { ForgotPwdUserComponent } from "./frontOffice/forgot-pwd-user/forgot-pwd-user.component";
import { HomeProviderUserComponent } from "./frontOffice/home-client-user/home-provider-user.component";
import { UnsubscribeUserComponent } from "./frontOffice/unsubscribe-user/unsubscribe-user.component";
import { Show2AdminComponent } from "./backOffice/show2-admin/show2-admin.component";
import { QrcodeUserComponent } from "./frontOffice/qrcode-user/qrcode-user.component";
import { RegiserAdminComponent } from "./backOffice/regiser-admin/regiser-admin.component";
import { SendMailAdminComponent } from "./backOffice/send-mail-admin/send-mail-admin.component";
import { SendMailUserComponent } from "./frontOffice/send-mail-user/send-mail-user.component";
import { ReceiveMailUserComponent } from "./frontOffice/receive-mail-user/receive-mail-user.component";
import { MailAdminComponent } from "./backOffice/mail-admin/mail-admin.component";
import { UpdatePasswordUserComponent } from "./frontOffice/update-password-user/update-password-user.component";
import { RegisterAdminUserComponent } from "./frontOffice/register-admin-user/register-admin-user.component";
import { WorkshopListComponent } from "./frontOffice/Workshop-list/Workshop-list.component";
import { CheckoutPaiementComponent } from "./frontOffice/checkout-paiement/checkout-paiement.component";
import { AddBookingComponent } from "./backOffice/add-Booking/add-Booking.component";
import { SuccessPopupComponent } from "./backOffice/success-popup/success-popup.component";
import { OfferListComponent } from "./backOffice/Specialist-list/offer-list.component";
import { DealsComponent } from "./backOffice/deals/deals.component";
import { ContractListComponent } from "./backOffice/contract-list/contract-list.component";
import { BasicStatsComponent } from "./backOffice/basic-stats/basic-stats.component";
import { ContractDetailsComponent } from "./backOffice/contract-details/contract-details.component";
import { AjouterCategorieComponent } from "./frontOffice/ajouter-categorie/ajouter-categorie.component";
import { HomeSpecialistUserComponent } from "./frontOffice/home-Specialist-user/home-vendor-user.component";
import { PortfelioSpecialitComponent } from "./frontOffice/portfelio-specialit/portfelio-specialit.component";
import { ChatComponent } from './backOffice/chat/chat.component';
import { ShowSpecialistComponent } from './backOffice/show-specialist/show-specialist.component';
import { DeetsSpecialistComponent } from './backOffice/deets-specialist/deets-specialist.component';
import { ProfileSpacialistComponent } from './backOffice/profile-spacialist/profile-spacialist.component';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { ProfileClientComponent } from './frontOffice/profile-client/profile-client.component';
import { ShowBookingsComponent } from './frontOffice/show-bookings/show-bookings.component';
import { AgendaComponent } from './frontOffice/agenda/agenda.component';
import { SpecialistAgendaComponent } from './specialist-agenda/specialist-agenda.component';
function CheckoutComponent() {

}

const routes: Routes = [
  {
    path: '',
    component: AllTemplateUserComponent,
    children: [
      { path: '', component: HomeUserComponent }
    ]
  },
  {
    path: 'admin', component: AllTemplateAdminComponent,
    children: [
      { path: '', component: DashboardAdminComponent },
      { path: 'register', component: RegiserAdminComponent },
      { path: 'show', component: ShowAdminComponent },
      { path: 'details/:id', component: DetailsAdminComponent },
      { path: 'register-specialist', component: RegisterVendorAdminComponent },
      { path: 'register-client', component: RegisterProviderAdminComponent },
      { path: 'pag', component: Show2AdminComponent },
      { path: 'send-mail', component: SendMailAdminComponent },
      { path: 'mail', component: MailAdminComponent },
      { path: 'ShowSpecialist', component: ShowSpecialistComponent },
      { path: 'deets/:id', component: DeetsSpecialistComponent },
      { path: 'AllBookings', component: ShowBookingsComponent },
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      { path: 'Home', component: HomeUserComponent },
      { path: 'register', component: RegisterUserComponent },
      { path: 'register-client', component: RegisterProviderUserComponent },
      { path: 'register-specialist', component: RegisterVendorUserComponent },
      { path: 'register-admin', component: RegisterAdminUserComponent },
      { path: 'send-code', component: SendCodeUserComponent },
      { path: 'authenticate', component: AuthenticationUserComponent },
      { path: 'upload-cv', component: UploadLogoUserComponent },
      { path: 'forgot-password', component: ForgotPwdUserComponent },
      { path: 'specialist', component: HomeSpecialistUserComponent },
      { path: 'specialist-agenda', component: SpecialistAgendaComponent },
      { path: 'unsubscribe', component: UnsubscribeUserComponent },
      { path: 'qrcode', component: QrcodeUserComponent },
      { path: 'send-mail', component: SendMailUserComponent },
      { path: 'receive-mail', component: ReceiveMailUserComponent },
      { path: 'update-pwd', component: UpdatePasswordUserComponent },
      { path: 'portfolio/:id', component: PortfelioSpecialitComponent },
      { path: 'profile', component: ProfileSpacialistComponent },
      { path: 'cala', component: CalendarComponent },

    ]
  },
  {
    path: 'workshop',
    component: AllTemplateUserComponent,
    children: [
      { path: 'show', component: WorkshopListComponent },
    ]
  },
  {
    path: 'Client',
    component: AllTemplateUserComponent,
    children: [
      { path: 'add/:id', component: AddBookingComponent },
      { path: 'success', component: SuccessPopupComponent },
      { path: 'list', component: OfferListComponent },
      { path: 'profileClient', component: ProfileClientComponent },
      { path: 'agenda/:id', component: AgendaComponent },
    ]
  },
  {
    path: 'contracts',
    component: AllTemplateAdminComponent,
    children: [
      { path: 'all', component: ContractListComponent },
      { path: 'stats', component: BasicStatsComponent },
      { path: 'details/:id', component: ContractDetailsComponent }
    ]
  },
  {
    path: 'categorie',
    component: AllTemplateUserComponent,
    children: [
      { path: 'add', component: AjouterCategorieComponent },
    ]
  },
  {
    path: 'chatNow', component: ChatComponent
  },
  { path: 'checkout/:id', component: CheckoutPaiementComponent },
  { path: 'checkout', component: CheckoutPaiementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
