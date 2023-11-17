import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { MenuAdminComponent } from './backOffice/menu-admin/menu-admin.component';
import { NavbarAdminComponent } from './backOffice/navbar-admin/navbar-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { NavbarUserComponent } from './frontOffice/navbar-user/navbar-user.component';
import { BannerUserComponent } from './frontOffice/banner-user/banner-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { RegisterBuyerAdminComponent } from './backOffice/register-buyer-admin/register-buyer-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterVendorAdminComponent } from './backOffice/register-vendor-admin/register-vendor-admin.component';
import { RegisterProviderAdminComponent } from './backOffice/register-provider-admin/register-provider-admin.component';
import { RegisterLivreurAdminComponent } from './backOffice/register-livreur-admin/register-livreur-admin.component';
import { RegisterBuyerUserComponent } from './frontOffice/register-buyer-user/register-buyer-user.component';
import { RegisterProviderUserComponent } from './frontOffice/register-provider-user/register-provider-user.component';
import {SendCodeUserComponent} from "./frontOffice/send-code-user/send-code-user.component";
import {RegisterVendorUserComponent} from "./frontOffice/register-vendor-user/register-vendor-user.component";
import { HomeUserComponent } from './frontOffice/home-user/home-user.component';
import { RegisterUserComponent } from './frontOffice/register-user/register-user.component';
import { PreloaderUserComponent } from './frontOffice/preloader-user/preloader-user.component';
import { AuthenticationUserComponent } from './frontOffice/authentication-user/authentication-user.component';
import { UploadLogoUserComponent } from './frontOffice/upload-logo-user/upload-logo-user.component';
import { HomeProviderUserComponent } from './frontOffice/home-client-user/home-provider-user.component';
import { HomeSpecialistUserComponent } from './frontOffice/home-Specialist-user/home-vendor-user.component';
import { ShowAdminComponent } from './backOffice/show-admin/show-admin.component';
import { DashboardAdminComponent } from './backOffice/dashboard-admin/dashboard-admin.component';
import { DetailsAdminComponent } from './backOffice/details-admin/details-admin.component';
import {CookieService} from "ngx-cookie-service";
import { ForgotPwdUserComponent } from './frontOffice/forgot-pwd-user/forgot-pwd-user.component';
import { UnsubscribeUserComponent } from './frontOffice/unsubscribe-user/unsubscribe-user.component';
import { Show2AdminComponent } from './backOffice/show2-admin/show2-admin.component';
import {NgxPaginationModule} from "ngx-pagination";
import { QrcodeUserComponent } from './frontOffice/qrcode-user/qrcode-user.component';
import { RegiserAdminComponent } from './backOffice/regiser-admin/regiser-admin.component';
import { SendMailAdminComponent } from './backOffice/send-mail-admin/send-mail-admin.component';
import { SendMailUserComponent } from './frontOffice/send-mail-user/send-mail-user.component';
import { ReceiveMailUserComponent } from './frontOffice/receive-mail-user/receive-mail-user.component';
import { MailAdminComponent } from './backOffice/mail-admin/mail-admin.component';
import { PreloaderAdminComponent } from './backOffice/preloader-admin/preloader-admin.component';
import { UpdatePasswordUserComponent } from './frontOffice/update-password-user/update-password-user.component';
import { Navbar2UserComponent } from './frontOffice/navbar2-user/navbar2-user.component';
import { RegisterAdminUserComponent } from './frontOffice/register-admin-user/register-admin-user.component';
import { WorkshopListComponent } from './frontOffice/Workshop-list/Workshop-list.component';
import { CheckoutPaiementComponent } from './frontOffice/checkout-paiement/checkout-paiement.component';
import { PaiementComponent } from './frontOffice/paiement/paiement.component';
import { SuccessPopupComponent } from './backOffice/success-popup/success-popup.component';
import { BasicStatsComponent } from './backOffice/basic-stats/basic-stats.component';
import { ContractDetailsComponent } from './backOffice/contract-details/contract-details.component';
import { ContractListComponent } from './backOffice/contract-list/contract-list.component';
import { ContractStatsComponent } from './backOffice/contract-stats/contract-stats.component';
import { DealsComponent } from './backOffice/deals/deals.component';
import { OfferListComponent } from './backOffice/Specialist-list/offer-list.component';
import {PipesModule} from './pipes.module'
import {AjouterCategorieComponent} from "./frontOffice/ajouter-categorie/ajouter-categorie.component";
import {AjouterStockComponent} from "./frontOffice/Details-user/ajouter-stock.component";
import { PortfelioSpecialitComponent } from './frontOffice/portfelio-specialit/portfelio-specialit.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

import { ChatComponent } from './backOffice/chat/chat.component';
import { AddBookingComponent } from './backOffice/add-Booking/add-Booking.component';
//import { MatNativeDateModule } from '@angular/material/core';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShowSpecialistComponent } from './backOffice/show-specialist/show-specialist.component';
import { DeetsSpecialistComponent } from './backOffice/deets-specialist/deets-specialist.component';
import { ProfileSpacialistComponent } from './backOffice/profile-spacialist/profile-spacialist.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarModule } from 'angular-calendar';
import { ProfileClientComponent } from './frontOffice/profile-client/profile-client.component';
import { ShowBookingsComponent } from './frontOffice/show-bookings/show-bookings.component';
import { AgendaComponent } from './frontOffice/agenda/agenda.component';
import { SpecialistAgendaComponent } from './specialist-agenda/specialist-agenda.component';
import { BookingListComponent } from './booking-list/booking-list.component';
@NgModule({
  declarations: [
 
    AppComponent,
    AllTemplateAdminComponent,
    AllTemplateUserComponent,
    MenuAdminComponent,
    NavbarAdminComponent,
    SpecialistAgendaComponent,
    FooterAdminComponent,
    NavbarUserComponent,
    BannerUserComponent,
    FooterUserComponent,
    BookingFormComponent,
    BookingListComponent,
    RegisterBuyerAdminComponent,
    RegisterVendorAdminComponent,
    RegisterProviderAdminComponent,
    RegisterLivreurAdminComponent,
    RegisterBuyerUserComponent,
    RegisterProviderUserComponent,
    RegisterVendorUserComponent,
    SendCodeUserComponent,
    HomeUserComponent,
    RegisterUserComponent,
    PreloaderUserComponent,
    AuthenticationUserComponent,
    UploadLogoUserComponent,
    HomeProviderUserComponent,
    HomeSpecialistUserComponent,
    ShowAdminComponent,
    DashboardAdminComponent,
    DetailsAdminComponent,
    ForgotPwdUserComponent,
    UnsubscribeUserComponent,
    Show2AdminComponent,
    QrcodeUserComponent,
    RegiserAdminComponent,
    SendMailAdminComponent,
    SendMailUserComponent,
    ReceiveMailUserComponent,
    MailAdminComponent,
    PreloaderAdminComponent,
    UpdatePasswordUserComponent,
    Navbar2UserComponent,
    RegisterAdminUserComponent,
    WorkshopListComponent,
    CheckoutPaiementComponent,
    PaiementComponent,
    ChatComponent,
    DeetsSpecialistComponent,
    ShowSpecialistComponent,
    SuccessPopupComponent,
    AddBookingComponent,
    BasicStatsComponent,
    ContractDetailsComponent,
    ContractListComponent,
    ContractStatsComponent,
    DealsComponent,
    OfferListComponent,
    AjouterCategorieComponent,
    AjouterStockComponent,
    PortfelioSpecialitComponent,
    ProfileSpacialistComponent,
    ProfileClientComponent,
    ShowBookingsComponent,
    AgendaComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    PipesModule,
    FullCalendarModule,
    CalendarModule, 
    MatDialogModule
    // MatNativeDateModule,
    // MatDatepickerModule

  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
